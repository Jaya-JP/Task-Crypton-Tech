import React from 'react'
import assets from '../../assets/assets'
import './Task3.css'

const Task3 = ( props ) => {
  return (

     <div className="card">
          <div className='left' >
          <div className="image">
               <img src={ props.image } alt="" />
          </div>
          <div className="cont">
               <h2> {props.name} </h2>
               <p> {props.date} <span> {props.time} </span></p>
          </div>
          </div>
          <div className="cost">
               <h2>+$ {props.cost} </h2>
               <p className={ props.status ? "Received" : "NotReceived" }> {props.status ? "Received": "Not Received " } </p>
          </div>

     </div>  

  )
}

export default Task3

