import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

const MobileDashboardLinks = () => {
  const [activeLink, setActiveLink] = useState("/dashboard");
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMobile = () => {
    setIsMobile(!isMobile);
  };

  const closeDropdown = () => {
    setIsMobile(false);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex md:hidden p-4 relative">
      <button
        onClick={handleToggleMobile}
        className="flex justify-center items-center w-8 h-8 rounded-lg absolute top-[-5px] left-0 z-20 "
      >
        <FaGear
          className={
            isMobile
              ? `text-[3rem] text-secondary-color`
              : `text-[1.8rem] text-darker-secondary `
          }
        />
      </button>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <>
          <div className="w-[50%] absolute top-[40px] xs:left-0 left-0 bg-white rounded-md border border-bg-header-footer dashboard-nav-index">
            <div className="flex flex-col w-full">
              <NavLink
                aria-label="Dashboard"
                to="/dashboard"
                activeClassName="bg-lighter-secondary"
                className={`text-font-family-color block border-b rounded-t-md border-bg-header-footer py-4 text-start pl-4 hover:bg-light-gray ${
                  activeLink === "/dashboard"
                    ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                    : ""
                }`}
              >
                Dashboard
              </NavLink>
              <NavLink
                aria-label="Update Profile"
                to="/update_profile"
                activeClassName="bg-bg-header-footer"
                className={`text-font-family-color block border-b  border-bg-header-footer py-4 text-start pl-4 hover:bg-light-gray ${
                  activeLink === "/update_profile"
                    ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                    : ""
                }`}
              >
                Profile
              </NavLink>
              <NavLink
                aria-label="Sponsorships"
                to="/user_sponsorships"
                activeClassName="bg-bg-header-footer"
                className={`text-font-family-color block border-b  border-bg-header-footer py-4 text-start pl-4 hover:bg-light-gray ${
                  activeLink === "/user_sponsorships"
                    ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                    : ""
                }`}
              >
                Sponsorships
              </NavLink>
              <NavLink
                aria-label="Change Password"
                to="/password_change"
                activeClassName="bg-bg-header-footer"
                className={`text-font-family-color block border-b border-bg-header-footer py-4 text-start pl-4 hover:bg-light-gray ${
                  activeLink === "/password_change"
                    ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                    : ""
                }`}
              >
                Change Password
              </NavLink>
              <NavLink
                aria-label="Sign Out"
                to="/signout"
                activeClassName="bg-bg-header-footer"
                className={`text-font-family-color py-4 text-start pl-4 rounded-b-md hover:bg-light-gray ${
                  activeLink === "/signout"
                    ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                    : ""
                }`}
              >
                Sign Out
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileDashboardLinks;
