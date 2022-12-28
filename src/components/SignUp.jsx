import React from 'react'
import './SignUp.css';

function SignUp() {
  return (
    <div className='sign-container'>
        <div className='sign-header'>
          <h3>Hi there! Order today</h3>
          <h1>To Your Door!</h1>
        </div>
        <div className='main-content'>
          <form>
          <input type="text" name="" placeholder='Full name'></input>
          <input type="email" name="" placeholder='Email'></input>
          <input type="text" name="" placeholder='Username'></input>  
          <input type="password" name="" placeholder='Password'></input>
          <input type="password" name="" placeholder='Confirm Password'></input> 
          <button type='submit' className='sign-btn'>Signup</button> 


          </form>
        </div>
        </div>
  )
}

export default SignUp