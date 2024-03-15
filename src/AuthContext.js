// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebase'; // Import your Firebase authentication module

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => {
    return useContext(AuthContext);
};

// Authentication provider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Set up a listener to monitor authentication state changes
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            console.log(user);
        });


        // Clean up the listener when the component unmounts
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
