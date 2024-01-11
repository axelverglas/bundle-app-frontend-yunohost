import { createBrowserRouter } from 'react-router-dom';

import Applayout from './components/layout/app-layout';
import Home from './pages/home';
import Error from './pages/error';
import Bundle from './pages/Bundle';
import BundleNew from './pages/BundleNew';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
        ],
    },
    {
        path: '/bundle',
        element: <Applayout />,
        children: [
            {
                path: '',
                element: <Bundle />,
            },
        ],
    },
    {
        path: '/new-bundle',
        element: <Applayout />,
        children: [
            {
                path: '',
                element: <BundleNew />,
            },
        ],
    },
    {
        path: '*',
        element: <Error />,
    },
]);
