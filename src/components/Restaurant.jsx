import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import Res1 from '../images/Res1.jpg'
import Res2 from '../images/Res2.jpg'
import Res3 from '../images/Res3.jpg'
import Res4 from '../images/Res4.jpg'
import Res5 from '../images/Res5.jpg'
import Res6 from '../images/Res6.jpg'
import { Link } from "react-router-dom";
import "./Restaurant.css"

function Restaurant(){
  return (
    <>
      <h2 className='restaurant-heading'> Restaurants <GiKnifeFork/> </h2>
        <div className='picture-div'>
          <Link to="/food" className="food-btn">
            <div className='container'>
              <img src={Res1} alt="image1" className='image-1'></img>
              <div class="one">
                <div class="text">LeBistro</div>
              </div>
            </div>
            <div className='container'>
              <img src={Res2} alt="image2" className= 'image-2'></img>
              <div class="two">
                <div class="text">
                    Beer
                      vs
                    Wine
                </div>
              </div>
            </div>
            <div className='container'>
              <img src={Res3} alt="image3" className= 'image-3'></img>
              <div class="three">
                <div class="text">Donut Dip</div>
              </div>
            </div>
            <div className='container'>
              <img src={Res4} alt="image4" className= 'image-4'></img>
              <div class="four">
                <div class="text">Bomonti</div>
              </div>
            </div>
            <div className='container'>
              <img src={Res5} alt="image5" className= 'image-5'></img>
              <div class="five">
                <div class="text">Annies Harbour</div>
              </div>
            </div>
            <div className='container'>
              <img src={Res6} alt="image6" className= 'image-6'></img>
              <div class="six">
                <div class="text">Jeff's</div>
              </div>
            </div>
          </Link>
        </div>
    </>
  )
}
export default Restaurant