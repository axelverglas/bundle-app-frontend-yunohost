import { createBrowserRouter } from 'react-router-dom';

import Applayout from './components/layout/app-layout';
import Home from './pages/home';
import Error from './pages/error';
import { Bundle } from './pages/bundle';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'bundle/:bundleId',
                element: <Bundle />,
            },
        ],
    },
    {
        path: '*',
        element: <Error />,
    },
]);
