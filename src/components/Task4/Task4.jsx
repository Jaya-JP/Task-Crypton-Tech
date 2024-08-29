import React from 'react'
import './Task4.css'
import assets from '../../assets/assets'

const Task4 = () => {
  return (
    <div className='task4'>
     <div className="menu">
          <img src={assets.menu} alt="" />
          <div className="right">
               <img src={ assets.search} alt="" />
               <img src={ assets.menubar} alt="" />
          </div>
     </div>
     <h6>#Top</h6>
     <h1>A Responsibly As <br /> Teach Leading <br /> Global Company</h1>
     <p>Creating Superior Products & Services</p>

     <div className="start-con">
          <div className="star">
               <img src={assets.star} alt="" />
          </div>
          <div className="r-cont">
               <h4>Trust Pilot</h4>
               <p>Rated Best <b>12.6K</b> Reviews </p>
          </div>
     </div>
     <div className="thumbnail">
          <div className="first-img">
               <button>Play</button>
          </div>

          <div className="right-img">
               <button>72%</button>
               <button>28%</button>

          </div>

     </div>
     <button className='signup'>Signup to Get 50% OFF</button>
     <button className='newProduct'>Explore New Products</button>


      
    </div>
  )
}

export default Task4
