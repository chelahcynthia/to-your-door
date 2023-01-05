import React from 'react'
import "./Profile.css"

function Profile() {
  return (
    <div className='profile'>
      {/* <div className='prof-header'>
        <h2>Profile</h2>
        <i className='prof-user' class="fa fa-user-circle"></i>
      </div> */}

      <div className='prof-container'>
        <h1>Hi, Chelah!</h1>
        <p>We have a new meal in Restaurant 02! Try it now!</p>
      </div>      

      <div className='meal-cards'>
        <h3>Your Favorite Meals</h3>
        <div className='card'>
          <img src="https://www.pexels.com/photo/vegetable-salad-on-white-ceramic-plate-1211887/" alt="" />
        </div>
        <div className='card'>
          <img src="https://www.pexels.com/photo/close-up-of-served-food-on-table-327158/" alt="" />
        </div>
        <div className='card'>
          <img src="https://www.pexels.com/photo/shrimp-pasta-served-on-gray-plate-2092906/" alt="" />
        </div>  
       
      </div>

      <div className='prof-user'>

      </div>

      <div className='meal-description'>
        <div className='meal'>
          <p>2 Assorted Sliced Fruits and Vegetables</p>
          <p>Ksh. 1800.00</p>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className='meal'>
          <p>2 Assorted Sliced Fruits and Vegetables</p>
          <p>Ksh. 1800.00</p>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className='meal'>
          <p>2 Assorted Sliced Fruits and Vegetables</p>
          <p>Ksh. 1800.00</p>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </div>        
      </div>

    </div>
  )
}

export default Profile