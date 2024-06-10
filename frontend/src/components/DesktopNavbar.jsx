import { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";

import {
  FaHome,
  FaTree,
  FaRegNewspaper,
  FaInfoCircle,
  FaImages,
} from "react-icons/fa";
import { FcFaq } from "react-icons/fc";
import { MdContacts } from "react-icons/md";

const DesktopNavbar = ({ isNavbarFixed, setIsNavbarFixed }) => {
  /* Handle DesktopNavbar on Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsNavbarFixed]);

  const desktopNavbarStyle = {
    position: isNavbarFixed ? "fixed" : "static",
  };

  return (
    <>
      <AuthNavbar />
      <nav
        className="desktop-nav flex w-full top-0 justify-center items-center bg-bg-header-footer h-[70px] font-general-font text-font-family-color text-[1rem]"
        style={desktopNavbarStyle}
      >
        {/* DesktopNavbar Links */}
        <div className="flex justify-center items-center h-full w-full bg-bg-header-footer ">
          <div className="border-r p-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <NavLink
              className="flex gap-1 justify-center items-center hover:border-b-2"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #5a6448",
                      color: "#5a6448",
                      scale: "1.1",
                    }
                  : undefined
              }
              aria-label="Link to Home Page "
              to="/"
            >
              <FaHome color="#5a6448" />
              <span>Home</span>
            </NavLink>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <NavLink
              className="flex gap-1 justify-center items-center hover:border-b-2"
              to="/trees"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #5a6448",
                      color: "#5a6448",
                      scale: "1.1",
                    }
                  : undefined
              }
              aria-label="Link to Sponsor page"
            >
              <FaTree color="#5a6448" />
              <span>Trees</span>
            </NavLink>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <NavLink
              className="flex gap-1 justify-center items-center hover:border-b-2"
              to="/news"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #5a6448",
                      color: "#5a6448",
                      scale: "1.1",
                    }
                  : undefined
              }
              aria-label="News page"
            >
              <FaRegNewspaper color="#5a6448" />
              <span>News</span>
            </NavLink>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <NavLink
              className="flex gap-1 justify-center items-center hover:border-b-2"
              to="/about"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #5a6448",
                      color: "#5a6448",
                      scale: "1.1",
                    }
                  : undefined
              }
              aria-label="About page"
            >
              <FaInfoCircle color="#5a6448" />
              <span>About</span>
            </NavLink>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <NavLink
              className="flex gap-1 justify-center items-center hover:border-b-2"
              to="/gallery"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #5a6448",
                      color: "#5a6448",
                      scale: "1.1",
                    }
                  : undefined
              }
              aria-label="Gallery page"
            >
              <FaImages className="text-darkgreen-color" />
              <span>Gallery</span>
            </NavLink>
          </div>
          <div className="border-r px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <NavLink
              className="flex gap-1 justify-center items-center hover:border-b-2"
              to="/faq"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #5a6448",
                      color: "#5a6448",
                      scale: "1.1",
                    }
                  : undefined
              }
              aria-label="FAQ page"
            >
              <FcFaq color="#5a6448" />
              <span>FAQs</span>
            </NavLink>
          </div>
          <div className="px-2 sm:px-4 lg:px-8 xl:px-14 flex items-center hover:scale-110 transition-transform duration-400 ease-linear hover:text-dark-gray">
            <NavLink
              className="flex gap-1 justify-center items-center hover:border-b-2"
              to="/contact"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #5a6448",
                      color: "#5a6448",
                      scale: "1.1",
                    }
                  : undefined
              }
              aria-label="Contact page"
            >
              <MdContacts color="#5a6448" />
              <span>Contact</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
