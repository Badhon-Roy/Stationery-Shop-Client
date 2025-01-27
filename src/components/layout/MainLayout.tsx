import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-[1200px] mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;