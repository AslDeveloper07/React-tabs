import React from "react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="bg-[#020817]  text-white py-4 sticky top-0 z-10 border-b border-[#6b6b6b5d]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Online Store
        </Link>
        <div className="relative">
          <Link to="/cart" className="flex items-center">
            <IoIosCart className="text-2xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-[2px] -right-1 bg-red-500 text-white text-[9px] font-bold rounded-full h-3 w-3 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;