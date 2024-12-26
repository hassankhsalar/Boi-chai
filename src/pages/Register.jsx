import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.PhotoURL.value;
        const name = form.name.value;

        // Password validation
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            return;
        }
        setPasswordError('');

        try {
            // Create user with email and password
            const result = await createUser(email, password);
            const user = result.user;

            // Store user in MongoDB without password
            const newUser = { email, name, photoURL };
            await axios.post('http://localhost:3000/users', newUser);

            // Show success toast
            toast.success('User registered successfully!');

            // Redirect to the home page
            navigate('/');
        } catch (error) {
            console.error('Error creating user:', error.message);
            toast.error('Failed to register. Please try again.');
        }
    };

    const handleGoogleSignIn = async () => {
      try {
          // Google sign-in
          const result = await signInWithGoogle();
          const user = result.user;
  
          // Store user in MongoDB without password
          const newUser = { email: user.email, name: user.displayName, photoURL: user.photoURL };
          try {
              await axios.post('http://localhost:3000/users', newUser);
              toast.success('User registered successfully!');
              navigate('/'); // Correctly using navigate here
          } catch (error) {
              if (error.response && error.response.status === 409) {
                navigate('/');
                  toast.error('User already exists. try log in instead next time.');
              } else {
                  toast.error('Failed to register. Please try again.');
              }
          }
      } catch (error) {
          console.error('Error with Google sign-in:', error.message);
          toast.error('Failed to log in with Google. Please try again.');
      }
  };
  

    return (
        <div className="hero bg-base-200 min-h-screen">
            <ToastContainer />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96"></div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="PhotoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            {passwordError && <p className="text-red-600 text-sm mt-2">{passwordError}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-6">
                            <button type="button" onClick={handleGoogleSignIn} className="btn bg-blue-600 text-white">
                                Login With Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
