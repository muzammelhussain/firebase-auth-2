import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-2 border-[#632EE3]"
              : "text-gray-600 hover:text-[#632EE3]"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-2 border-[#632EE3]"
              : "text-gray-600 hover:text-[#632EE3]"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-2 border-[#632EE3]"
              : "text-gray-600 hover:text-[#632EE3]"
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-2 border-[#632EE3]"
              : "text-gray-600 hover:text-[#632EE3]"
          }
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-2 border-[#632EE3]"
              : "text-gray-600 hover:text-[#632EE3]"
          }
        >
          Dashboard
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a className="btn" onClick={handleSignOut}>
            Sign Out
          </a>
        ) : (
          <Link to="/login">Login Now</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
