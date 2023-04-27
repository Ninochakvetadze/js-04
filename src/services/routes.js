import { About, Home, Contact, Products } from "../pages";
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
    {
        path: "products",
        element: <Products />,
    },
];
