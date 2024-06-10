import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { TbPasswordUser } from "react-icons/tb";
import { PiSignOutLight } from "react-icons/pi";
import { GoSponsorTiers } from "react-icons/go";

const DashboardLinks = () => {
  const [activeLink, setActiveLink] = useState("/dashboard");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="hidden md:flex md:w-[30%] lg:w-[20%]  h-full bg-white rounded-md border border-bg-header-footer">
        {/* Dashboard Menu */}
        <div className="flex flex-col w-full rounded-md">
          <NavLink
            aria-label="Dashboard"
            to="/dashboard"
            activeClassName="bg-bg-header-footer"
            className={`flex items-center text-font-family-color gap-1 border-b rounded-t-md border-bg-header-footer py-4 text-start pl-4 hover:bg-light-gray ${
              activeLink === "/dashboard"
                ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                : ""
            }`}
          >
            <MdOutlineDashboardCustomize />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            aria-label="Update Profile"
            to="/update_profile"
            activeClassName="bg-bg-header-footer"
            className={`flex items-center gap-1 text-font-family-color border-b  border-bg-header-footer py-4 text-start pl-4 hover:bg-light-gray ${
              activeLink === "/update_profile"
                ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                : ""
            }`}
          >
            <ImProfile />
            <span>Profile</span>
          </NavLink>
          <NavLink
            aria-label="Sponsorships"
            to="/user_sponsorships"
            activeClassName="bg-bg-header-footer"
            className={`flex items-center gap-1 text-font-family-color border-b  border-bg-header-footer py-4 text-start pl-4 hover:bg-light-gray ${
              activeLink === "/user_sponsorships"
                ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                : ""
            }`}
          >
            <GoSponsorTiers />
            <span>Sponsorships</span>
          </NavLink>
          <NavLink
            aria-label="Change Password"
            to="/password_change"
            activeClassName="bg-bg-header-footer"
            className={`flex items-center gap-1 text-font-family-color border-b  border-bg-header-footer py-4 text-start pl-4 hover:bg-light-gray ${
              activeLink === "/password_change"
                ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                : ""
            }`}
          >
            <TbPasswordUser />
            <span>Change Password</span>
          </NavLink>
          <NavLink
            aria-label="Sign Out"
            to="/signout"
            activeClassName="bg-bg-header-footer"
            className={`flex items-center gap-1 text-font-family-color py-4 text-start pl-4 rounded-b-[10px] hover:bg-light-gray ${
              activeLink === "/signout"
                ? "border-l-4 border-l-darker-secondary bg-lighter-secondary"
                : ""
            }`}
          >
            <PiSignOutLight />
            <span>Sign Out</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default DashboardLinks;
