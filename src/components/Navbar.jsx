import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { FaMoon, FaSun } from "react-icons/fa6";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  // State to track theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save preference
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // Fetch user data if logged in
    const fetchUserData = async () => {
      if (user && user.email) {
        try {
          console.log(user.email);
          const response = await axios.get(
            `https://boi-chai-serverside.vercel.app/users/${user.email}`
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Successfully logged out");
        setUserData(null); // Clear user data on logout
      })
      .catch((error) => {
        console.log("Failed to log out:", error);
      });
  };

  return (
    <div className="navbar fixed z-10 w-full bg-secondary text-text font-normal px-6 md:px-20 2xl:px-24">
      <div className="navbar-start">
        <img className="w-10" src={logo} alt="Logo" />
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 transition duration-300"
              >
                {theme === "light" ? (
                  <FaMoon className="text-lg text-gray-800 dark:text-white" />
                ) : (
                  <FaSun className="text-lg text-yellow-500" />
                )}
              </button>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/addbook">Add Book</Link>
                </li>
                <li>
                  <Link to="/borrowedbooks">Borrowed Books</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/allbooks">All Books</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base px-1 gap-4 2xl:gap-10">
          <li className="hover:scale-105 hover:text-white hover:border-white border-b-2 rounded-xl border-accent ">
            <Link to="/">Home</Link>
          </li>
          <li>
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 transition duration-300"
              >
                {theme === "light" ? (
                  <FaMoon className="text-lg text-gray-800 dark:text-white" />
                ) : (
                  <FaSun className="text-lg text-yellow-500" />
                )}
              </button>
            </li>
          {user && (
            <>
              <li className="hover:scale-105 hover:text-white hover:border-white border-b-2 rounded-xl border-accent ">
                <Link to="/addbook">Add Book</Link>
              </li>
              <li className="hover:scale-105 hover:text-white hover:border-white border-b-2 rounded-xl border-accent ">
                <Link to="/borrowedbooks">Borrowed Books</Link>
              </li>
            </>
          )}
          <li className="hover:scale-105 hover:text-white hover:border-white border-b-2 rounded-xl border-accent ">
            <Link to="/allbooks">All Books</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={userData?.name || user.email}
            >
              {userData?.photoURL ? (
                <img
                  src={userData.photoURL}
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover border"
                />
              ) : (
                <FaUserCircle className="w-12 h-12" />
              )}
            </div>
            <button
              onClick={handleSignOut}
              className="btn font-normal bg-primary border-b-2 border-accent hover:bg-accent hover:border-primary"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center">
              <FaUserCircle className="w-10 h-10 text-accent" />
            </div>
            <div className="flex gap-3">
              <Link to="/login">
                <button className="btn bg-accent hover:scale-110 hover:text-white">
                  Login
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
