import Home from "../Pages/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    }
])