// src/App.js
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "./Components/RegisterPage/Signup";
import Loginform from "./Components/LoginPage/Loginform";
import Welcome from "./Components/WelcomePage/Welcome";
import Home from "./Components/HomePage/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/login" element={<Loginform />} />
        <Route path="/home" element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
