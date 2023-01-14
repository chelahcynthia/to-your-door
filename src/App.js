import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp"
import NavBar from "./components/NavBar";
<<<<<<< HEAD
<<<<<<< HEAD
import About from "./components/About";

=======
import Restaurant from "./components/Restaurant"
>>>>>>> b8e88fa483d35e10e0169eaa71d1c96d9eb77689
=======

import Food from "./components/Food"

import Restaurant from "./components/Restaurant"

>>>>>>> 5fab2015ea8f0fc19cfd3e575a6c069a41412689
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
     
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LogIn />} />
<<<<<<< HEAD
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
=======

        <Route path="/restaurant" element={<Restaurant />} />
>>>>>>> b8e88fa483d35e10e0169eaa71d1c96d9eb77689
      </Routes>

      
=======
        <Route path="/food" element={<Food />} />
      </Routes>
     
>>>>>>> 5fab2015ea8f0fc19cfd3e575a6c069a41412689
    </>
  );
}

export default App;
