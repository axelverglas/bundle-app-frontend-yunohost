// About.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from "../components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import MultiSelect from '@/components/ui/multiSelect';
import PageFooter from '@/components/ui/pageFooter';

const BundleNew: React.FC = () => {

  const [selectedApps, setSelectedApps] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  const formSchema = z.object({
    name: z.string().min(2, {
        message: "Le nom du bundle doit être d'au moins 2 caractères."
    }).max(30, {
        message: "Le nom du bundle ne peut pas dépasser 30 caractères.",
    }),
    apps: z.array(z.string())
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
    { value: 'option6', label: 'Option 6' },
    { value: 'option7', label: 'Option 7' },
    { value: 'option8', label: 'Option 8' },
    { value: 'option9', label: 'Option 9' }
  ];


  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl mb-4 mt-4'>Créer un bundle</h1>

      <div className='w-full max-w-lg m-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
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
                  {selectedApps.map((app) => (
                    <li key={app}>{app}</li>
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

      <PageFooter></PageFooter>
    </div>

  );
};

export default BundleNew;
