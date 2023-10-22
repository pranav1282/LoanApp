"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  //functionality to handle navbar button click on smaller screens
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="">
      <div className="flex justify-between p-8 px-12 ">
        {/* Logo */}
        <Link to="/">
          <div className="my-auto">
            <h1 className="text-3xl font-semibold ">
              Quick<span className="text-brightRed">Loan</span>
            </h1>
          </div>
        </Link>

        {/* Nav list - larger screens */}
        <div className="my-auto">
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-darkGrayishBlue">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-darkGrayishBlue">
              <Link to="/notes">Loans</Link>
            </li>
            <li className="hover:text-darkGrayishBlue">
              <Link to="/newloan">Add new loan</Link>
            </li>
            <li className="hover:text-darkGrayishBlue">
              <Link to="/borrowers">Borrowers</Link>
            </li>
            {/* <li className="hover:text-darkGrayishBlue">Loan Plans</li>
            <li className="hover:text-darkGrayishBlue">Loan types</li> */}
            <li className="hover:text-darkGrayishBlue">
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>

        {/* Buttons - sign in/out menu-toggle */}
        <div className="my-auto">
          <Link to="/login">
            <button className="hidden md:flex bg-brightRed px-4 p-2 rounded-full text-white hover:bg-brightRedLight">
              Log in
            </button>
          </Link>

          <button className="hidden bg-brightRed px-8 p-2 rounded-full text-white hover:bg-brightRedLight">
            Sign out
          </button>

          {/* Handeling toggle  */}
          <div className="md:hidden" onClick={handleNav}>
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
        </div>
      </div>

      {/* Nav list - larger screens */}
      <div
        className={
          nav
            ? "md:hidden px-40 w-fit mx-auto py-6 shadow-gray-500 shadow-md"
            : "hidden"
        }
      >
        <ul className="max-w-sm text-center space-y-4 font-semibold">
          <li className="hover:text-darkGrayishBlue">Sign in</li>
          <li className="hover:text-darkGrayishBlue hidden">Sign out</li>
          <li className="hover:text-darkGrayishBlue">Home</li>
          <li className="hover:text-darkGrayishBlue">Loans</li>
          <li className="hover:text-darkGrayishBlue">Add new loan</li>
          <li className="hover:text-darkGrayishBlue">Borrowers</li>
          <li className="hover:text-darkGrayishBlue">Loan Plans</li>
          <li className="hover:text-darkGrayishBlue">Loan types</li>
          <li className="hover:text-darkGrayishBlue">Users</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
