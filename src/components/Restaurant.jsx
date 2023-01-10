import React from 'react'
import Res1 from '../images/Res1.jpg'
import Res2 from '../images/Res2.jpg'
import "./Restaurant.css"

function Restaurant(){
  return (
    <>
      <h2 className='restaurant-heading'> Restaurants </h2>
        <img src={Res1} alt="image1"></img>
        
    </>
  )
}
export default Restaurant