import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { TUser } from "@/types";
import { verifyToken } from "@/utils/verifyToken";
import { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    const token = useAppSelector(selectCurrentToken);
    const { role } = useParams();
    let user;

    if (token) {
        user = verifyToken(token);
    }

    const adminPaths = [
        {
            path: `/dashboard/${role}/adminDashboard`,
            element: "Dashboard",
        },
        {
            path: `/dashboard/${role}/createProduct`,
            element: "Create Product",
        },
        {
            path: `/dashboard/${role}/getAllProducts`,
            element: "All Products",
        },
        {
            path: `/dashboard/${role}/allUser`,
            element: "All User",
        },
        {
            path: `/`,
            element: "Home",
        }
    ];

    const userPaths = [
        {
            path: `/dashboard/${role}`,
            element: "Dashboard",
        },
        {
            path: `/dashboard/${role}/viewOrders`,
            element: "View Orders",
        },
        {
            path: `/dashboard/${role}/profile`,
            element: "Profile",
        },
        {
            path: `/`,
            element: "Home",
        }
    ];

    const paths = (user as TUser)?.role === "admin" ? adminPaths : userPaths;

    return (
        <div className="flex min-h-screen max-w-[1200px] mx-auto">
            {/* Drawer */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 xl:w-64 lg:w-48 md:w-48 bg-[#fb5770] text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform lg:translate-x-0`}
            >
                <div className="p-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">
                            {(role as string).toUpperCase()} Dashboard
                        </h2>
                        {/* Close Button */}
                        <button
                            className="text-2xl text-white lg:hidden"
                            onClick={toggleDrawer}
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        {paths.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-white text-[#fb5770] font-semibold p-2 rounded-md"
                                        : "hover:bg-white hover:text-[#fb5770] transition-all p-2 rounded-md"
                                }
                                onClick={closeDrawer} // Close the drawer when clicking a link
                            >
                                {item.element}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-6">
                {/* Menu Button for Small Screens */}
                <button
                    className="lg:hidden fixed top-4 left-4 text-2xl text-[#fb5770]"
                    onClick={toggleDrawer}
                >
                    <FaBars />
                </button>
                <div className="xl:max-w-[950px] lg:max-w-[800px] ms-auto bg-white shadow-lg rounded-lg p-6 min-h-screen">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
