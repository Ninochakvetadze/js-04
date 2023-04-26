import { About, Home, Contact } from "../pages";
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
];

export default routesMap;
