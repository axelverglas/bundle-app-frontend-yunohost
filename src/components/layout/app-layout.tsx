import Footer from '../site-footer';
import Header from '../site-header';
import { Outlet } from 'react-router-dom';

function Applayout() {
    return (
        <>
            <Header />
            <div className="flex-grow flex flex-col">
                <div className="container px-4 md:px-8 flex-grow flex flex-col pt-4 md:pt-8">
                    <Outlet />
                </div>
            </div>
            <div className="container px-4 md:px-8">
                <Footer />
            </div>
        </>
    );
}

export default Applayout;
