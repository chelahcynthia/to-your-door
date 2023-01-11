import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import Res1 from '../images/Res1.jpg'
import Res2 from '../images/Res2.jpg'
import Res3 from '../images/Res3.jpg'
import Res4 from '../images/Res4.jpg'
import Res5 from '../images/Res5.jpg'
import Res6 from '../images/Res6.jpg'
import "./Restaurant.css"

function Restaurant(){
  return (
    <>
      <h2 className='restaurant-heading'> Restaurants <GiKnifeFork/> </h2>
        <div className='picture-div'>
          <img src={Res1} alt="image1" className='image-1'></img>
          <img src={Res2} alt="image2" className= 'image-2'></img>
          <img src={Res3} alt="image3" className= 'image-3'></img>
          <img src={Res4} alt="image4" className= 'image-4'></img>
          <img src={Res5} alt="image5" className= 'image-5'></img>
          <img src={Res6} alt="image6" className= 'image-6'></img>
        </div>
    </>
  )
}
export default Restaurant