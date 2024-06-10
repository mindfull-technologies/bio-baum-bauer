/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/BioBaumBauer_Logo.svg";
import { FaCartArrowDown } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdLogIn,
  IoMdLogOut,
} from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CartContext } from "../store/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { Tooltip } from "flowbite-react";

const AuthNavbar = () => {
  const { loggedIn, authUser, expiredTime } = useContext(AuthContext);
  const { cartTrees } = useContext(CartContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="auth-nav relative h-20 w-full font-general-font bg-secondary-color opacity-90 text-secondary-color text-[1rem] md:text-[1.2rem]">
      <div className="container h-full w-full mx-auto flex justify-between items-center ps-4 pr-6">
        <div className="flex items-center gap-3 rounded-full">
          <img
            src={logoImage}
            className="h-12 w-12 md:h-16 md:w-16 shadow-lg rounded-full"
            alt="Logo"
          />

          <p className=" hidden text-white font-main-font text-2xl md:block">
            Bio Baum Bauer&nbsp;
          </p>
        </div>
        <div className="flex space-x-4 items-center">
          {!loggedIn && (
            <Link
              to="/login"
              className="navIcon flex items-center"
              aria-label="Login page"
            >
              <Tooltip content="click here to login">
                <div className="flex items-center text-2xl text-bold py-2 px-4 hover:bg-darker-secondary text-white-color hover:text-bg-header-footer rounded-2xl">
                  <IoMdLogIn className="" />
                  <span>&nbsp;Login</span>
                </div>
              </Tooltip>
            </Link>
          )}
          {loggedIn && (
            <div className="flex items-center gap-3">
              <div className="h-auto dropdown">
                <div
                  id="dropdown-button"
                  onClick={toggleDropdown}
                  className="w-full select-none h-auto top-10 right-40  border-bg-header-footer rounded-[10px] px-2 py-4 cursor-pointer flex justify-between items-center text-secondary-color text-lg"
                >
                  <Link aria-label="user dashboard, link to dashboard">
                    <span className="text-lg text-white font-general-font">
                      Hi, &nbsp;
                    </span>
                    <span className="text-lg text-white font-general-font">
                      {authUser.lastName}&nbsp;
                    </span>
                  </Link>

                  {isDropdownOpen ? (
                    <IoIosArrowUp className="text-xl text-white" />
                  ) : (
                    <IoIosArrowDown className="text-xl text-white" />
                  )}
                </div>
                <div
                  id="dropdown-menu"
                  className={`${
                    isDropdownOpen ? "block " : "hidden"
                  } absolute top-[71px] h-auto bg-lighter-primary right-20 md:right-24 lg:right-64 w-auto rounded-[6px] border-2 border-bg-header-footer shadow-2xl mt-2 transition-all duration-300 text-font-family-color`}
                >
                  <div className=" cursor-pointer hover:bg-lighter-secondary border-b border-bg-header-footer rounded-t-[2px] text-lg">
                    <Link
                      to="/dashboard"
                      className="py-4 px-6 navIcon w-full h-full flex items-center transition-transform duration-75 ease-linear"
                      aria-label="dashboard page"
                    >
                      <div className="flex items-center gap-3">
                        <CgProfile className="ani text-secondary-color text-xl" />
                        <span>Profile</span>
                      </div>
                    </Link>
                  </div>
                  <div className=" cursor-pointer hover:bg-lighter-secondary border-b border-bg-header-footer text-lg">
                    <Link
                      to="/signout"
                      className="py-4 px-6 navIcon w-full h-full flex items-center transition-transform duration-75 ease-linear"
                      aria-label="Sign Out page"
                    >
                      <div className="flex items-center transition-transform duration-75 ease-linear">
                        <div className="flex items-center justify-start gap-3">
                          <IoMdLogOut className="ani text-secondary-color text-xl" />
                          <span>Logout</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/cart"
                className="navIcon transition-transform duration-75 ease-linear"
                aria-label="Cart page"
              >
                <div className="flex items-center justify-center rounded-full bg-white w-[50px] h-[50px] relative">
                  <FaCartArrowDown size="1.9rem" />
                  {cartTrees.length > 0 ? (
                    <div
                      className="absolute top-[0.2rem] right-[0.2rem] bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                      style={{ transform: "translate(50%, -50%)" }}
                    >
                      {cartTrees.length}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
