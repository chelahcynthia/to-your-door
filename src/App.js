import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Food from "./components/Food";
import Restaurant from "./components/Restaurant";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ProtectedRoutes from "./ProtectedRoutes";
import PayForm from "./components/PayForm";

function App() {
  const [user, setUser] = useState("User");
  const [amount, setAmount] = useState("");

  return (
    <>
      {/* the cartprovider component is wrapped in the outside to make it accessible to all the components */}

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart setAmount={setAmount} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          
          <Route path="/food" element={<Food />} />

          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/payment" element={<PayForm amount={amount} />} />
        </Route>
        <Route path="/login" element={<LogIn setUser={setUser} />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
