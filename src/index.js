import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.scss";
import { Header, Footer } from "./pages";
import { routesMap } from "./services";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                {routesMap.map((route, index) => (
                    <Suspense
                        key={"suspense-list-${index}"}
                        fallback={<div>Loading...</div>}
                    >
                        <Route
                            key={`route-list-${index}`}
                            path={route.path}
                            element={route.element}
                        />
                    </Suspense>
                ))}
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
