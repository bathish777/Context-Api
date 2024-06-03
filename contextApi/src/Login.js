// Login.js

import React from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Log In</button>
    </div>
  );
};

export default Login;
