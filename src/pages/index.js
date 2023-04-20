import { About } from "./about";
import { Contact } from "./contact";
import { Home } from "./home";
export { Header } from "./Header";
export { Footer } from "./Footer";

export const map = [
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
