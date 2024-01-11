import { buttonVariants } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

export default function Error() {
    return (
        <div className="bg-background text-foreground flex items-center justify-center h-screen">
            <div className="space-y-4">
                <h2 className="text-8xl mb-4">404</h2>
                <h1 className="text-3xl font-semibold">Oops! Nous sommes désolés</h1>
                <p className="text-sm text-muted-foreground">Nous sommes désolés, mais la page est introuvable</p>
                <NavLink to="/" className={buttonVariants()}>
                    Retourner à l'accueil
                </NavLink>
            </div>
        </div>
    );
}
