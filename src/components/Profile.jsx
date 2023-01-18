import React from 'react'
import "./Profile.css"


function Profile({user}) {
  return (
    <>
      <div className='prof-container'>
        <h2>Profile</h2>
        <i className="fa fa-user-circle"></i>
      </div>

      <div className='profile'>
        <div className='prof-card1'>
        </div>

        <div className='prof-card2'>
        </div>

        <div className='prof-card3'>          
        </div>
        <div className='prof-card4'>          
        </div>
        <div className='prof-card5'>
        <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=1380&t=st=1672986735~exp=1672987335~hmac=2ce74dfba4228412b7afe5eba4c5ac8bb4b3cb6e12b00f875f09b31fdec3985d" alt="" />
        </div>
        <div className='prof-card6'>
          <h2>Welcome, Chelah!</h2>
          <div className='icons'>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-pinterest-square" aria-hidden="true"></i>
            <i class="fa fa-google" aria-hidden="true"></i>
          </div>
          
        </div>

      </div>
    </>    
    
  )
}

export default Profile