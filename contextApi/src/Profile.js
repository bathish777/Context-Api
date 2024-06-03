// Profile.js

import React from 'react';
import { useAuth } from './AuthContext';

const Profile = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>User Profile</h2>
          <p>Welcome, User!</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
