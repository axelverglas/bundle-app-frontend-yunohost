import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import MultiSelect from '@/components/ui/multiSelect';
import { useGetApps } from '@/api/app';


export default function BundleNew() {

  const { data: apps, isLoading, error } = useGetApps();
  
  const options = Object.keys(apps?.apps || {}).map((key, index) => ({
    value: apps?.apps[key]?.manifest?.id || key,
    label: apps?.apps[key]?.manifest?.name || key
  }));

  const [selectedApps, setSelectedApps] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  const formSchema = z.object({
    title: z.string().min(2, {
        message: "Le nom du bundle doit être d'au moins 2 caractères."
    }).max(30, {
        message: "Le nom du bundle ne peut pas dépasser 30 caractères.",
    }),
    description : z.string(),
    apps: z.array(z.string())
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      apps: []
    },
  });

  const handleSelectionChange = (selectedOptions: string[]) => {
    form.setValue('apps', selectedOptions);
    setSelectedApps(selectedOptions);
  };
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  };


  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl mb-4 mt-4'>Créer un bundle</h1>

      <div className='w-full max-w-lg m-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du bundle</FormLabel>
                  <FormControl>
                    <Input placeholder='Bundle Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description du bundle</FormLabel>
                  <FormControl>
                    <Input placeholder='Grâce à ce bundle, vous pouvez...' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='apps'
              render={() => (
                <FormItem>
                  <FormLabel>Applications</FormLabel>
                  <FormControl>
                    <MultiSelect options={options} onSelectionChange={handleSelectionChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            {selectedApps.length > 0 && (
              <div className='mt-4'>
                <h3 className='text-lg font-semibold'>Applications sélectionnées :</h3>
                <ul>
                  {selectedApps.map((appValue) => (
                    <li key={appValue}>
                      {options.find((option) => option.value === appValue)?.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button type='submit' className='w-full'>
              Créer
            </Button>
          </form>
        </Form>
      </div>

      <Button className='mt-5' onClick={handleGoBack}>
        Retour
      </Button>

    </div>

  );
};
