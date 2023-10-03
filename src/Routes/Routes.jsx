import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Card from "../Example/Card";
import News from "../Pages/News/News";
import PriveRoute from "./PriveRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[{
            path:"/",
            element:<Home></Home>,
            loader: ()=> fetch('/news.json')
        },
        {
            path: "/news/:id",
            element:<PriveRoute><News></News></PriveRoute>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/career",
            element:<Career></Career>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path: "/card",
            element:<Card></Card>
        }
    ]
    }
]);

export default router;