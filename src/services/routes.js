import {About, Home, Contact} from './pages';
export const routesMap = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
];
