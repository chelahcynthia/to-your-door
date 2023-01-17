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
        <div className='user-prof'>

        </div>

        <div className='favorite-foods'>

        </div>

        <div className='user-socials'>
          
        </div>

      </div>
    </>    
    
  )
}

export default Profile