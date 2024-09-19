// 

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LogIn from './Components/Screens/LogIn';
import SignUp from './Components/Screens/Signup/Signup';
import Home from './Components/Home/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("firstName");
    setIsLoggedIn(false); // Update state
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='Login' element={<LogIn />} />
          <Route path='Home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
