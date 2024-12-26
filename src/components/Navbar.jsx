import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data if logged in
    const fetchUserData = async () => {
      if (user && user.email) {
        try {
          const response = await axios.get(
            `https://boi-chai-serverside.vercel.app/users/${user.email}`
          );
          setUserData(response.data);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('Successfully logged out');
        setUserData(null); // Clear user data on logout
      })
      .catch((error) => {
        console.log('Failed to log out:', error);
      });
  };

  return (
    <div className="navbar bg-base-100 rounded-2xl">
      <div className="navbar-start">
        <img className="w-20" src={logo} alt="Logo" />
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addbook">Add Book</Link></li>
            <li><Link to="/allbooks">All Books</Link></li>
            <li><Link to="/borrowedbooks">Borrowed Books</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-semibold px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/addbook">Add Book</Link></li>
          <li><Link to="/allbooks">All Books</Link></li>
          <li><Link to="/borrowedbooks">Borrowed Books</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={userData?.name || user.email}>
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
            <button onClick={handleSignOut} className="btn">Log Out</button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4">
              <FaUserCircle className="w-full h-full" />
            </div>
            <div className="flex gap-3">
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
