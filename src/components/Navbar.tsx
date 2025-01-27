import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import OutlineButton from "./customButton/OutlineButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navbarLinks = [
    {
        path : '/',
        element : "Home"
    },
    {
        path : '/about',
        element : "About"
    },
    {
        path : '/shop',
        element : "Shop"
    },
    {
        path : '/dashboard',
        element : "Dashboard"
    },
  ]



  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-0 z-40 hidden bg-white shadow-md lg:block">
        <div className="navbar max-w-[1200px] mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            <img
              className="w-[90px] h-[60px] object-cover"
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/615476e378a1a8001de58b7f/0x0.png"
              alt="Logo"
            />
          </Link>

          {/* Navigation Items */}
          <div className="flex gap-8 font-bold">
            {navbarLinks?.map((item, index) => (
              <NavLink
                key={index}
                to={item?.path}
                className={({ isActive }) =>
                  `underline-animation ${
                    isActive ? "text-[#fb5770] font-bold" : ""
                  }`
                }
              >
                {item?.element}
              </NavLink>
            ))}
          </div>

          {/* Search Bar */}
          <form className="flex items-center border-2 border-[#fb5770] rounded-md" style={{borderRadius: '4px'}}>
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-4 py-2 w-[200px] border-none outline-none"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-[#fb5770] text-white hover:bg-[#e04d62]"
            >
              Search
            </button>
          </form>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <Link to={"/favoriteCards"} className="relative">
              <img
                className="w-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/73/73814.png"
                alt="Favorite"
              />
              <p className="absolute -top-3 -right-1 bg-[#fb5770] text-white text-sm font-bold p-1 rounded-full w-[20px] h-[20px] flex justify-center items-center">
                2
              </p>
            </Link>
            <Link to={"/addedCards"} className="relative">
              <img
                className="w-[40px]"
                src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
                alt="Cart"
              />
              <p className="absolute -top-3 -right-1 bg-[#fb5770] text-white text-sm font-bold p-1 rounded-full w-[20px] h-[20px] flex justify-center items-center">
                2
              </p>
            </Link>
            <Link
              to={"/signIn"}>
                <OutlineButton text="Sign In"/>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="relative z-40 lg:hidden">
        {/* Drawer Toggle Button */}
        <button
          onClick={toggleDrawer}
          className="fixed z-50 p-3 bg-[#fb5770] text-white rounded-full top-4 right-4 shadow-md"
        >
          <MdOutlineMenu size={24} />
        </button>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={toggleDrawer}
            className="absolute top-4 left-4 p-3 bg-[#fb5770] text-white rounded-full shadow-md"
          >
            <IoMdCloseCircleOutline size={24} />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 mt-20 space-y-6 font-bold">
            {["Home", "Shop", "About", "Favorite Cards", "My Cart", "Sign In"].map(
              (item, index) => (
                <NavLink
                  key={index}
                  to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `underline-animation ${
                      isActive ? "text-[#fb5770] font-bold" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              )
            )}
            <button
              onClick={handleNavClick}
              className="w-full py-2 text-white bg-[#fb5770] rounded-lg font-bold hover:bg-[#e04d62]"
            >
              Sign Out
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;