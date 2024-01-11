import { createBrowserRouter } from 'react-router-dom';

import Applayout from './components/layout/app-layout';
import Home from './pages/home';
import Error from './pages/Error';

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
        path: '*',
        element: <Error />,
    },
]);
