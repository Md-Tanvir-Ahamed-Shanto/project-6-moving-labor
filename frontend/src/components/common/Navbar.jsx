import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex sticky top-0 z-50 shadow-md shadow-blue-900 justify-between bg-primary py-5 items-center">
      <div className="w-full flex justify-center">
        <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300 animate-pulse animation-duration-3000 drop-shadow-lg">Moving Nice</span>
      </div>
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
          to={"/services"}
        >
          Service
        </Link>
        <Link
          className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
          to={"/prices"}
        >
          Prices
        </Link>
        <Link
          className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
      <div className="w-full hidden md:flex justify-center gap-3">
        <Link
          to={"/login"}
          className="bg-purple-500 hover:bg-purple-800 cursor-pointer p-2 rounded-md text-white font-bold"
        >
          Login
        </Link >
        <Link to={"/signup"} className="bg-purple-500 hover:bg-purple-800 cursor-pointer p-2 rounded-md text-white font-bold">
          Sign Up
        </Link>
      </div>
      <div className="">
        {isOpen ? (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden mr-6 bg-red-400 rounded-sm px-1 flex items-center justify-center h-full"
          >
            <BiMenu size={30} color="white" />
          </div>
        ) : (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden mr-6 bg-red-400 rounded-sm px-1 flex items-center justify-center h-full"
          >
            <BiMenu size={30} color="white" />
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
            to={"/services"}
          >
            Service
          </Link>
          <Link
            className="text-white font-bold text-lg hover:bg-red-900 rounded-md p-2"
            to={"/prices"}
          >
            Prices
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
