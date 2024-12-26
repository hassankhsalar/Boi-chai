import React, { useState, createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import axios from 'axios';

const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    /////
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser?.email);
            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios.post('https://boi-chai-serverside.vercel.app/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                    setLoading(false);
                })
            }
            else{
                axios.post('https://boi-chai-serverside.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout', res.data)
                    setLoading(false);
                })
            }

            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[] )

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext }; // Re-export the AuthContext
export default AuthProvider;