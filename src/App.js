import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp"
import NavBar from "./components/NavBar";
<<<<<<< HEAD
import About from "./components/About";

=======
import Restaurant from "./components/Restaurant"
>>>>>>> b8e88fa483d35e10e0169eaa71d1c96d9eb77689
import "./App.css";

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
=======

        <Route path="/restaurant" element={<Restaurant />} />
>>>>>>> b8e88fa483d35e10e0169eaa71d1c96d9eb77689
      </Routes>

      
    </>
  );
}

export default App;
