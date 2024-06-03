// AuthContext.js

import React, { createContext, useState, useContext } from 'react';






// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const login = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
  };




  
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
