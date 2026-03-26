import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import errorPage from '../Pages/errorPage/errorPage';
import Home from '../Pages/Home/Home';
import AppPage from '../Pages/AppPage/AppPage';
import InstallationPage from '../Pages/InstallationPage/InstallationPage';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: errorPage,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/home",
                Component: Home
            },
            {
                path: "app",
                Component: AppPage
            },
            {
                path: "installation",
                Component: InstallationPage
            },
        ]
    }
])