import App from "@/App";
import About from "@/pages/about/About";
import AllProducts from "@/pages/allProducts/AllProducts";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/allProducts',
                element : <AllProducts/>
            },
            {
                path : '/login',
                element : <Login/>
            },
        ]
    }
])
export default router;