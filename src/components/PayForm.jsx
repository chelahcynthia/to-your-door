import { Modal } from "react-bootstrap";
import React from 'react'
import './PayForm.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PayForm() {

  const [phoneNumber, setPhoneNumber] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(phoneNumber);
    navigate("/cart")
  }

  return (
    <div className="payment-container">
      <form id="payment-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="phone-number">Phone Number:</label>
        <input type="tel" name="phone-number" id="phone-number" placeholder="Please start with 254....." onChange={(e) => setPhoneNumber(e.target.value)} />
        <button type="submit">Pay</button>
      </form>
    </div>
  )
}

export default PayForm