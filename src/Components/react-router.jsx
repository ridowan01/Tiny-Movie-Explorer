import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./layout";
import Home from "../Pages/home";
import Movies from "../Pages/movies";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {index: true, Component: Home},
            {path: "movies", Component: Movies},
        ]
    },
]);

export default function ReactRouter() {
    return <RouterProvider router={router} />
}