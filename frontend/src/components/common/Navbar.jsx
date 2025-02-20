import { useState } from "react";
import { Link } from "react-router-dom";
import {BiMenu} from "react-icons/bi"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex sticky top-0 z-50 shadow-md shadow-blue-900 justify-between bg-primary py-5 items-center">
      <div className="w-full flex justify-center ">Logo </div>
      <div className=" max-w-7xl hidden md:block ">
        <Link
          className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
          to={"/about"}
        >
          About
        </Link>
        <Link
          className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
          to={"/service"}
        >
          Service
        </Link>
        <Link
          className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
          to={"/price"}
        >
          Price
        </Link>
        <Link
          className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
      <div className="w-full hidden md:flex justify-center gap-3">
        <div>Login</div>
        <div>Sign Up</div>
      </div>
      <div className="">
        {isOpen ? (
             <div onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-6 bg-red-400 rounded-sm px-1 flex items-center justify-center h-full">
           <BiMenu size={30} color="white"/>
           </div>
         
        ) : (
            <div onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-6 bg-red-400 rounded-sm px-1 flex items-center justify-center h-full">
            <BiMenu size={30} color="white"/>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="w-full bg-blue-700 top-11 absolute flex  flex-col items-center mt-5">
          <Link
            className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
            to={"/service"}
          >
            Service
          </Link>
          <Link
            className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
            to={"/price"}
          >
            Price
          </Link>
          <Link
            className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
            to={"/contact"}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
