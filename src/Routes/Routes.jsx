import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[{
            path:"/",
            element:<Home></Home>
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
        }
    ]
    }
]);

export default router;