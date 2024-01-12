import { Link } from 'react-router-dom';
import Logo from '../assets/ynh_logo_roundcorner.svg';

function Header() {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center">
                <Link to="/">
                    <img src={Logo} alt="logo" className="h-12" />
                </Link>
                <div className="ml-auto flex space-x-2">
                    <a
                        href="https://github.com/axelverglas/bundle-app-backend-yunohost"
                        title="Lien Documentation"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-gray-200 p-2 rounded"
                    >
                        <span>Documentation Technique</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
