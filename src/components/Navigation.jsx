import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

function Navigation() {
  return (
    <div className="fixed py-3 px-14 flex justify-evenly gap-10 w-11/12 text-gray-500 bottom-2 bg-gray-50 z-30 border-t-gray-100 border-t-1 shadow-2xl rounded-full left-1/2 transform -translate-x-1/2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col justify-center items-center gap-1 ${
            isActive ? "text-primary" : "text-gray-500"
          }`
        }
      >
        <IoHomeOutline size={20} />
        <span className="text-xs">Home</span>
      </NavLink>
      <NavLink
        to="/my-projects"
        className={({ isActive }) =>
          `flex flex-col justify-center items-center gap-1 ${
            isActive ? "text-primary" : "text-gray-500"
          }`
        }
      >
        <IoHomeOutline size={20} />
        <span className="text-xs">My Projects</span>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex flex-col justify-center items-center gap-1 ${
            isActive ? "text-primary" : "text-gray-500"
          }`
        }
      >
        <img
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/134611813/original/8833c82d793f87e6939f2ce863f55e1b6b1416cf/design-minimalist-profile-pictures.jpg"
          alt=""
          className="rounded-full w-6 h-6 object-cover"
        />{" "}
        <span className="text-xs">Profile</span>
      </NavLink>
    </div>
  );
}

export default Navigation;
