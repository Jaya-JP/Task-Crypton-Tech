import React from 'react'
import './Task.css'
import assets from  '../../assets/assets'

const Task1 = (props) => {
  return (
    <div className='Task1'>
     <div className="top-con">
          <h2>{ props.name }</h2 >
          <h4><span>
          <i className={ props.arrow }></i>
               </span>{props.per }%</h4>
     </div>
     <div className="bottom-con">
          <img src={props.image } alt="" />
          <h1>$ {props.rs} </h1>
     </div>

    </div>
  )
}

export default Task1