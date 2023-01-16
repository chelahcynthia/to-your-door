import React, {  useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp"
import About from "./components/About";
import NavBar from "./components/NavBar";
import Restaurant from "./components/Restaurant"
import "./App.css";

function App() {
  const [user, setUser] = useState("User")
 
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile user={user}/>} />
        <Route path="/login" element={<LogIn setUser={setUser}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />

        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
