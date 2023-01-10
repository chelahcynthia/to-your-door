import React from 'react'
import "./Profile.css"


function Profile() {
  return (
    <>
      <div className='prof-container'>
        <h2>Profile</h2>
        <i className="fa fa-user-circle"></i>
      </div>
     <div className='profile'>
      <div className='prof-header'>
        <h1>Hi, Chelah!</h1>
        <p>We have a new meal in Restaurant 02! Try it now!</p>
        <h3>Your Favorite Meals</h3>         
      </div> 

       <div className='prof-user'>

      </div>   
          
        <div className='card'>
          <img src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=1380&t=st=1672986158~exp=1672986758~hmac=fcf3188835893291e477bebb1a1b0d9564e635c0ed98847a307fd10d140882d9" alt="" />
        </div>
        <div className='card'>
          <img src="https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=1480" alt="" />
        </div>
        <div className='card'>
          <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=1380&t=st=1672986735~exp=1672987335~hmac=2ce74dfba4228412b7afe5eba4c5ac8bb4b3cb6e12b00f875f09b31fdec3985d" alt="" />
        </div>  

      {/* <div className='meal-description'>
        <div className='meal'>
          <div className='meal-text'>
          <p>2 Assorted Sliced Fruits and Vegetables</p>
          <p>Ksh. 1800.00</p>
          </div>          
          <i class="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className='meal'>
          <div className='meal-text'>
          <p>2 Assorted Sliced Fruits and Vegetables</p>
          <p>Ksh. 1800.00</p>
          </div>          
          <i class="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className='meal'>
          <div className='meal-text'>
          <p>2 Assorted Sliced Fruits and Vegetables</p>
          <p>Ksh. 1800.00</p>
          </div>          
          <i class="fa fa-trash" aria-hidden="true"></i>
        </div>      
      </div> */}
    </div> 
    </>    
    
  )
}

export default Profile