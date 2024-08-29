import React from 'react'
import './Task2.css'
import assets from '../../assets/assets'

const Task2 = (props) => {
  return (
    <div className='task2' >
     <tr>
          <td>
               <div className="cource">
                    <div className="image">
                         <img src={ props.img } alt="" />
                    </div>
                    <div className="cont">
                         <p> {props.course} </p>
                         <p> {props.lesson} Lessions </p>
                    </div>
               </div>
          </td>
          <td>{props.startdate} </td>
          <td> {props.complete} </td>
          <td> {props.Duration} </td>
     </tr>
    </div>
  )
}
export default Task2

