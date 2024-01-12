import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function Footer() {
    const repoOptions = [
        { label: 'Frontend', value: 'https://github.com/axelverglas/bundle-app-frontend-yunohost' },
        { label: 'Backend', value: 'https://github.com/axelverglas/bundle-app-backend-yunohost' },
    ];

    return (
        <footer className="flex flex-col items-center justify-between gap-4 min-h-[3rem] md:h-20 py-2 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2024 Built by Groupe 2 M1TL. The source code is available on
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="ml-1 focus:outline-none text-grey-500 hover:underline">GitHub</button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {repoOptions.map((option) => (
                            <DropdownMenuItem key={option.label}>
                                <a href={option.value} target="_blank" rel="noopener noreferrer">
                                    {option.label}
                                </a>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </p>
        </footer>
    );
}
