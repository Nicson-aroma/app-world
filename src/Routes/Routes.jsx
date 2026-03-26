import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import AppPage from '../Pages/AppPage/AppPage';
import InstallationPage from '../Pages/InstallationPage/InstallationPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AppDetails from '../Pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
                loader: ()=>fetch('appData.json')
            },
            {
                path: "/app",
                Component: AppPage
            },
            {
                path: "/installation",
                Component: InstallationPage
            },
            {
                path: "/appdetails/:id",
                Component: AppDetails,
                loader: ()=>fetch('appData.json')
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])