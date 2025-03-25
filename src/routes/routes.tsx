import App from "@/App";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import About from "@/pages/about/About";
import AddedCards from "@/pages/addedCards/AddedCards";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AllOrders from "@/pages/admin/orderManagement/AllOrders";
import CreateProduct from "@/pages/admin/productManagement/CreateProduct";
import GetAllProducts from "@/pages/admin/productManagement/GetAllProducts";
import UpdateProduct from "@/pages/admin/productManagement/updateProduct";
import UserData from "@/pages/admin/userManagement/UserData";
import AllProducts from "@/pages/allProducts/AllProducts";
import Dashboard from "@/pages/dashboard/Dashboard";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Order from "@/pages/order/Order";
import ProductDetails from "@/pages/productDetails/ProductDetails";
import SignUp from "@/pages/signUp/SignUp";
import ViewOrders from "@/pages/user/orderManagement/ViewOrders";
import UserProfile from "@/pages/user/UserProfile";
import OrderVerify from "@/pages/verify/OrderVerify";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/allProducts',
                element: <AllProducts />
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails />
            },
            {
                path: '/addedCards',
                element: <AddedCards />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path: '/orders/verify',
                element: <OrderVerify />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
        ]
    },
    {
        path: '/dashboard/:role',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        children: [
            // {
            //     path: '',
            //     element: <Navigate to="/dashboard/admin/adminDashboard" replace />,
            // },
            {
                path: 'adminDashboard',
                index: true,
                element: <ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>
            },
            {
                path: 'createProduct',
                element: <ProtectedRoute role="admin"><CreateProduct /></ProtectedRoute>
            },
            {
                path: 'getAllProducts',
                element: <ProtectedRoute role="admin"><GetAllProducts /></ProtectedRoute>
            },
            {
                path: 'updateProduct/:id',
                element: <ProtectedRoute role="admin"><UpdateProduct /></ProtectedRoute>
            },
            {
                path: 'allUser',
                element: <ProtectedRoute role="admin"><UserData /></ProtectedRoute>
            },
            {
                path: 'allOrders',
                element: <ProtectedRoute role="admin"><AllOrders /></ProtectedRoute>
            },
            {
                path: 'viewOrders',
                element: <ProtectedRoute role="user"><ViewOrders /></ProtectedRoute>
            },
            {
                path: 'userProfile',
                element: <ProtectedRoute role="user"><UserProfile /></ProtectedRoute>
            }
        ]
    }
])
export default router;