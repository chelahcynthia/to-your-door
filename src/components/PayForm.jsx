import { Modal } from "react-bootstrap";
import React from 'react'
import './PayForm.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PayForm({amount}) {

  const [phoneNumber, setPhoneNumber] = useState()
  
  const navigate = useNavigate()
  const apiUrl = "http://127.0.0.1:3000/mpesa"
  
  const mpesaDetails = {
    phone_number: phoneNumber,
    amount: amount
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(phoneNumber);
    navigate("/cart")

    console.log(mpesaDetails);

    fetch(apiUrl, {
      method:"POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(mpesaDetails)
    })
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