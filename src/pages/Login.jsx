import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { email, password } = formData;

    try {
      const result = await signInUser(email, password);
      const user = result.user;

      // Request a JWT token
      const response = await axios.post(
        'https://boi-chai-serverside.vercel.app/jwt',
        { email: user.email },
        { withCredentials: true }
      );

      const token = response.data.token;
      localStorage.setItem('authToken', token); 

      navigate(from, { replace: true });
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', err);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(''); 
  
    try {
      
      await signInWithGoogle();
  
      navigate(from, { replace: true });
    } catch (error) {
      setError('Failed to log in with Google. Please try again.');
      console.error('Google Sign-In error:', error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Boi-Chai</h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="mb-6 text-right">
            <Link to="/forgotpassword" className="text-blue-500 hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 mb-4 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
            >
              Continue with Google
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
