import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import MultiSelect from '@/components/ui/multi-select';
import { useGetApps } from '@/api/app';
import { api } from '../lib/api';

export default function BundleNew() {
    const { data: apps } = useGetApps();

    const options = Object.keys(apps?.apps || {}).map((key) => ({
        value: apps?.apps[key]?.manifest?.id || key,
        label: apps?.apps[key]?.manifest?.name || key,
        description: apps?.apps[key]?.manifest?.description || '',
    }));

    const [selectedApps, setSelectedApps] = useState<string[]>([]);

    const navigate = useNavigate();

    const formSchema = z.object({
        title: z
            .string()
            .min(2, {
                message: "Le nom du bundle doit être d'au moins 2 caractères.",
            })
            .max(30, {
                message: 'Le nom du bundle ne peut pas dépasser 30 caractères.',
            }),
        description: z.string(),
        apps: z.array(
            z.object({
                appName: z.string(),
                description: z.string(),
            })
        ),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
            apps: [],
        },
    });

    const handleSelectionChange = (selectedOptions: string[]) => {
        const updatedApps = selectedOptions.map((appValue) => ({
            appName: appValue,
            description: options.find((option) => option.value === appValue)?.description.fr || '',
        }));
        form.setValue('apps', updatedApps);
        console.log(updatedApps);
        setSelectedApps(selectedOptions);
    };

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            await api.post(`${import.meta.env.VITE_API_URL}/api/bundle/`, data);
            navigate('/');
        } catch (error) {
            console.error('Erreur lors de la création du bundle :', error);
        }
    }

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Créer un bundle</h1>

            <div className="w-full max-w-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom du bundle</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Bundle Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description du bundle</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Grâce à ce bundle, vous pouvez..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="apps"
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
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Applications sélectionnées :</h3>
                                <ul>
                                    {selectedApps.map((appValue) => (
                                        <li key={appValue}>{options.find((option) => option.value === appValue)?.label}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <Button type="submit" className="w-fit">
                            Créer
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
