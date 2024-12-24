import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
  


    if(loading){
       return <span className="loading loading-spinner loading-lg"></span>
    }

  if (user) {
    return children; // Render the child components if the user is authenticated
  }

  return <Navigate to="/login" state={location?.pathname} replace />; // Redirect to the login page if not authenticated
};

export default PrivateRoute;
