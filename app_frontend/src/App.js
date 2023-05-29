import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { Login } from './components';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    // if (!User) navigate('/login');
  });

  return (
    // <GoogleOAuthProvider clientId='260197052761-78lg3hu57j3acsek3k72st5olbvigvpq.apps.googleusercontent.com'>
    <Routes>
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
