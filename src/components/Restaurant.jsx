import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Restaurant.css"

function Restaurant(){
  return (
    <>
      <h2 className='restaurant-heading'> Restaurants <GiKnifeFork/> </h2>
      <Link to="/food" className="food-btn">
        <div className='picture-div'>          
            <div className='img-card1'>
              <img src="https://images.pexels.com/photos/14212506/pexels-photo-14212506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-1'/>
            </div>

            <div className='img-card2'>
              <img src="https://images.pexels.com/photos/14886030/pexels-photo-14886030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-2'/>
            </div>

            <div className='img-card3'>
              <img src="https://images.pexels.com/photos/3352765/pexels-photo-3352765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-3'/>
            </div>

            <div className='img-card4'>
              <img src="https://images.pexels.com/photos/11838704/pexels-photo-11838704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-4'/>
              
            </div>

            <div className='img-card5'>
              <img src="https://images.pexels.com/photos/13290499/pexels-photo-13290499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-5'/>
            </div>

            <div className='img-card6'>
              <img src="https://images.pexels.com/photos/2574489/pexels-photo-2574489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-6'/>
            </div>                    
         </div>
        </Link>
    </>
  )
}
export default Restaurant