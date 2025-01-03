import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { TbPasswordUser } from 'react-icons/tb';
import { PiSignOutLight } from 'react-icons/pi';
import { GoSponsorTiers } from 'react-icons/go';

const DashboardLinks = () => {
  const [activeLink, setActiveLink] = useState('/dashboard');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className='hidden md:flex md:w-[30%] lg:w-[20%]  h-full bg-white rounded-md border border-primary'>
        {/* Dashboard Menu */}
        <div className='flex flex-col w-full rounded-md'>
          <NavLink
            aria-label='Dashboard'
            to='/dashboard'
            activeClassName='bg-primary'
            className={`flex items-center text-stone gap-1 border-b rounded-t-md border-primary py-4 text-start pl-4 hover:bg-gray-light ${
              activeLink === '/dashboard'
                ? 'border-l-4 border-l-sage bg-aloe'
                : ''
            }`}
          >
            <MdOutlineDashboardCustomize />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            aria-label='Update Profile'
            to='/update_profile'
            activeClassName='bg-primary'
            className={`flex items-center gap-1 text-stone border-b  border-primary py-4 text-start pl-4 hover:bg-gray-light ${
              activeLink === '/update_profile'
                ? 'border-l-4 border-l-sage bg-aloe'
                : ''
            }`}
          >
            <ImProfile />
            <span>Profile</span>
          </NavLink>
          <NavLink
            aria-label='Sponsorships'
            to='/user_sponsorships'
            activeClassName='bg-primary'
            className={`flex items-center gap-1 text-stone border-b  border-primary py-4 text-start pl-4 hover:bg-gray-light ${
              activeLink === '/user_sponsorships'
                ? 'border-l-4 border-l-sage bg-aloe'
                : ''
            }`}
          >
            <GoSponsorTiers />
            <span>Sponsorships</span>
          </NavLink>
          <NavLink
            aria-label='Change Password'
            to='/password_change'
            activeClassName='bg-primary'
            className={`flex items-center gap-1 text-stone border-b  border-primary py-4 text-start pl-4 hover:bg-gray-light ${
              activeLink === '/password_change'
                ? 'border-l-4 border-l-sage bg-aloe'
                : ''
            }`}
          >
            <TbPasswordUser />
            <span>Change Password</span>
          </NavLink>
          <NavLink
            aria-label='Sign Out'
            to='/signout'
            activeClassName='bg-primary'
            className={`flex items-center gap-1 text-stone py-4 text-start pl-4 rounded-b-[10px] hover:bg-gray-light ${
              activeLink === '/signout'
                ? 'border-l-4 border-l-sage bg-aloe'
                : ''
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
