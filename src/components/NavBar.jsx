import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const NavBar = () => {

  const link = (
    <nav className=" w-full mx-auto ">
      <div className=" flex lg:flex-row p-4  flex-col lg:gap-8  md:gap-5 gap-4 text-2xl font-medium leading-none text-gray-400">
        <NavLink to="/" className="hover:text-green-300 transition">
          Home
        </NavLink>

        <NavLink to="/addProduct" className="hover:text-green-300 transition">
        Add Product
        </NavLink>
        <NavLink to="/about" className="hover:text-green-300 transition">
          About Us
        </NavLink>
        <NavLink to="/contact" className="hover:text-green-300 transition">
          Contact Us
        </NavLink>
        {/* {users && (
          <NavLink to="/profile" className="hover:text-green-300 transition">
            Profile
          </NavLink>
        )} */}
      </div>
    </nav>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu   menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          
         <div className=" flex items-center justify-center ml-6">
            <img className="object-cover w-24 rounded-3xl"
             src={logo} alt="" srcset="" />
            {/* <a className="btn btn-ghost text-xl">VictoryZone</a> */}
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"}>
          <a className="btn">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
