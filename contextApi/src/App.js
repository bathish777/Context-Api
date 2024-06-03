



//context to share user authentication status across multiple components.

// App.js

import React from 'react';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Profile from './Profile';

const App = () => {
  return (
    <AuthProvider>
      <div style={{ textAlign: 'center' }}>
        <h1>User Authentication Example</h1>
        <Login />
        <Profile />
      </div>
    </AuthProvider>
  );
};

export default App;
