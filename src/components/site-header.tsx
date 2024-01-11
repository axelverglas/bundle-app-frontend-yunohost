import Logo from '../assets/ynh_logo_roundcorner.svg';

function Header() {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center">
                <img src={Logo} alt="logo" className="h-12" />
            </div>
        </header>
    );
}

export default Header;
