import { About, Home, Contact, Products } from "../pages";
const routesMap = [
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

export default routesMap;
