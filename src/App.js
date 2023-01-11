import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp"
import About from "./components/About";
import NavBar from "./components/NavBar";

import Food from "./components/Food"

import Restaurant from "./components/Restaurant"

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
        <Route path="/food" element={<Food />} />
      </Routes>
    </>
  );
}

export default App;
