import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetAdmins, useGetDomains, useGetOneBundle } from '../api/bundle';
import { Form, FormDescription, FormField, FormItem, FormLabel, FormMessage, FormControl } from './ui/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import AppCard from './app-card';
import { api } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export default function FormInstall({ id }: { id: number }) {
    const { data: admins, isLoading: isLoadingAdmins } = useGetAdmins();
    const { data: bundle, isLoading: isLoadingBundle } = useGetOneBundle(id);
    const { data: allDomains, isLoading: isLoadingDomains } = useGetDomains();

    const [selectedApps, setSelectedApps] = useState<string[]>([]);
    const [installationMessages, setInstallationMessages] = useState<string[]>([]);

    const navigate = useNavigate();

    const handleSelectionChange = (selectedApp: string) => {
        setSelectedApps((prevSelectedApps) => {
            const updatedSelectedApps = prevSelectedApps.includes(selectedApp)
                ? prevSelectedApps.filter((app) => app !== selectedApp)
                : [...prevSelectedApps, selectedApp];

            form.setValue('apps', updatedSelectedApps);

            return updatedSelectedApps;
        });
    };

    const formSchema = z.object({
        domain: z.string(),
        user: z.string().min(1, "Le nom d'utilisateur est requis"),
        password: z.string().min(6, 'Le mot de passe doit avoir au moins 6 caractères'),
        apps: z.array(z.string()),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        const appData = selectedApps.map((selectedApp) => {
            const app = bundle?.apps?.find((app) => app.app_name === selectedApp);
            return {
                appName: app?.app_name || selectedApp,
                domain: data.domain,
                path: '/' + selectedApp,
                admin: data.user,
                password: data.password,
            };
        });
        try {
            await api.post(`${import.meta.env.VITE_API_URL}/api/install`, appData);
        } catch (error) {
            console.error('Erreur lors de la création du bundle :', error);
        }
    }

    useEffect(() => {
        const eventSource = new EventSource(`${import.meta.env.VITE_API_URL}/api/install/updates`);

        eventSource.onmessage = (event) => {
            try {
                const parsedData = JSON.parse(event.data);
                if (parsedData && parsedData.message) {
                    setInstallationMessages((prevMessages: string[]) => [...prevMessages, parsedData.message]);
                }
            } catch (error) {
                console.error('Erreur lors du parsing des données SSE:', error);
            }
            if (event.data.includes('Installation completed')) {
                eventSource.close();
                navigate('/');
            }
        };

        eventSource.onerror = (error) => {
            console.error('Erreur SSE :', error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, [navigate]);

    console.log(installationMessages);

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Installer le bundle</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="domain"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Domaine</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={field.value || 'Sélectionnez un domaine'} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {isLoadingDomains ? (
                                                    <SelectItem value="Chargement..." disabled>
                                                        Chargement...
                                                    </SelectItem>
                                                ) : (allDomains?.domains?.length ?? 0) > 0 ? (
                                                    allDomains?.domains?.map((domain) => (
                                                        <SelectItem key={domain} value={domain}>
                                                            {domain}
                                                        </SelectItem>
                                                    ))
                                                ) : (
                                                    <SelectItem value="Aucun domaine disponible" disabled>
                                                        Aucun domaine disponible
                                                    </SelectItem>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>Le domaine par lequel vous voulez accèder à vos applications</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="user"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Utilisateur Administrateur</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={field.value || 'Sélectionnez un administrateur'} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {isLoadingAdmins ? (
                                                    <SelectItem value="Chargement..." disabled>
                                                        Chargement...
                                                    </SelectItem>
                                                ) : admins && admins.users && Object.keys(admins.users).length > 0 ? (
                                                    Object.values(admins.users).map((admin) => (
                                                        <SelectItem key={admin.username} value={admin.username}>
                                                            {admin.fullname}
                                                        </SelectItem>
                                                    ))
                                                ) : (
                                                    <SelectItem value="Aucun administrateur disponible" disabled>
                                                        Aucun administrateur disponible
                                                    </SelectItem>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>L'utilisateur qui sera administrateur de vos applications</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mot de passe</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" />
                                    </FormControl>
                                    <FormDescription>Le mot de passe pour administrer</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="apps"
                        render={() => (
                            <FormItem>
                                <FormLabel>Applications</FormLabel>
                                <FormControl>
                                    {!isLoadingBundle && bundle && bundle.apps ? (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {bundle.apps.map((app, index) => (
                                                <>
                                                    <AppCard key={index} app={app} onSelect={() => handleSelectionChange(app.app_name)} />
                                                </>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>Loading bundle...</p>
                                    )}
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-2">
                        <Button type="button" variant="ghost" onClick={() => navigate('/')}>
                            Retour
                        </Button>
                        <Dialog>
                            <DialogTrigger>
                                <Button type="submit">Installer</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Installation...</DialogTitle>
                                </DialogHeader>
                                <DialogDescription>Informations de téléchargement...</DialogDescription>
                                <ul className="flex flex-col gap-2">
                                    {installationMessages.map((message, index) => (
                                        <li key={index} className="p-2 rounded-lg bg-background border border-1 text-muted-foreground">
                                            {message}
                                        </li>
                                    ))}
                                </ul>
                            </DialogContent>
                        </Dialog>
                    </div>
                </form>
            </Form>
        </div>
    );
}
