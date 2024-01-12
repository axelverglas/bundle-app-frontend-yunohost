import Footer from '../site-footer';
import Header from '../site-header';
import { Outlet } from 'react-router-dom';

function Applayout() {
    return (
        <>
            <Header />
            <div className="flex-grow flex flex-col">
                <div className="container flex-grow flex flex-col pt-4 md:pt-8">
                    <Outlet />
                </div>
            </div>
            <div className="container">
                <Footer />
            </div>
        </>
    );
}

export default Applayout;
