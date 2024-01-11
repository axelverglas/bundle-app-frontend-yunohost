import Logo from '../assets/ynh_logo_roundcorner.svg';

function Header() {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center">
                <div className="flex items-center gap-6">
                    <a href="/">
                        <img src={Logo} alt="logo" className="h-12" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
