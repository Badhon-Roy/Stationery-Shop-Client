import App from "@/App";
import About from "@/pages/about/About";
import AllProducts from "@/pages/allProducts/AllProducts";
import Home from "@/pages/home/Home";
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
            }
        ]
    }
])
export default router;