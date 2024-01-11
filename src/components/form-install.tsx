import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetAdmins, useGetDomains, useGetOneBundle } from '../api/bundle';
import { Form, FormDescription, FormField, FormItem, FormLabel, FormMessage, FormControl } from './ui/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const formSchema = z.object({
    apps: z.array(z.string()),
    user: z.string().min(1, "Le nom d'utilisateur est requis"),
    password: z.string().min(6, 'Le mot de passe doit avoir au moins 6 caractères'),
    domain: z.string(),
});

export default function FormInstall({ id }: { id: number }) {
    const { data: admins, isLoading: isLoadingAdmins } = useGetAdmins();
    const { data: bundle, isLoading: isLoadingBundle } = useGetOneBundle(id);
    console.log(bundle);
    console.log(isLoadingBundle);
    const { data: allDomains, isLoading: isLoadingDomains } = useGetDomains();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
    }
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Installer le bundle</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                        Installer
                    </Button>
                </form>
            </Form>
        </div>
    );
}
