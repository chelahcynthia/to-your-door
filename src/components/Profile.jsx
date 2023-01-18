import React from 'react'
import "./Profile.css"


function Profile({user}) {
  return (
    <div className='prof'>
      <div className='prof-container'>
        <h2>Profile</h2>
        <i className="fa fa-user-circle"></i>
      </div>

      <div className='profile'>
        <div className='prof-card1'>
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
        </div>

        <div className='prof-card2'>
        <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=1380&t=st=1672986735~exp=1672987335~hmac=2ce74dfba4228412b7afe5eba4c5ac8bb4b3cb6e12b00f875f09b31fdec3985d" alt="" />
        </div>
        <div className='prof-card3'>
          <h2>Welcome, {user}!</h2>
          <div className='icons'>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-pinterest-square" aria-hidden="true"></i>
            <i class="fa fa-google" aria-hidden="true"></i>
          </div>          
        </div>

        <div className='prof-card4'>
          <img src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=1380&t=st=1672986158~exp=1672986758~hmac=fcf3188835893291e477bebb1a1b0d9564e635c0ed98847a307fd10d140882d9" alt="" />
        </div>

        <div className='prof-card5'>
          <img src="https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=1480" alt="" />
        </div>
      </div>
    </div>    
    
  )
}

export default Profile