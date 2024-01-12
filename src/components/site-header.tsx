import { Link } from 'react-router-dom';
import Logo from '../assets/ynh_logo_roundcorner.svg';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { Icons } from './ui/icons';

function Header() {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center">
                <Link to="/">
                    <img src={Logo} alt="logo" className="h-12" />
                </Link>
                <Link
                    to="/bundle/create"
                    className="ml-5 hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2 transition-all"
                >
                    Créer un bundle
                </Link>
                <div className="ml-auto flex space-x-2">
                    <a
                        href="https://github.com/axelverglas/bundle-app-frontend-yunohost"
                        title="Lien Documentation"
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                            buttonVariants({
                                variant: 'ghost',
                            }),
                            'w-9 px-0 cursor-pointer'
                        )}
                    >
                        <Icons.gitHub className="h-4 w-4" />
                        <span className="sr-only">GitHub Documentation</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
