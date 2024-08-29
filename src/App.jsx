
import './App.css'
import assets from './assets/assets'
import Task1 from './components/task1/Task1'
import Task2 from './components/Task2/Task2'
import Task3 from './components/Task3/Task3'
import Task4 from './components/Task4/Task4'

function App() {


  return (
    <div className='App'>
      
      <div className="task1">
      <Task1  name='Revenue'  arrow='fa-solid fa-arrow-down' per='10'  image= {assets.arrow} rs='2.047'   />
      <Task1  name='Orders'  arrow='fa-solid fa-arrow-up' per='20'  image= {assets.cart} rs='356' />
      <Task1  name='Dine In'  arrow='fa-solid fa-arrow-up' per='20'  image= {assets.spoon} rs='220' />
      <Task1  name='Take away'  arrow='fa-solid fa-arrow-down' per='5'  image= {assets.ice} rs='135' />
      </div>


        {/* task 2 */}
      {/* <div className="task2" >
        <table>
          <h1>My Courses</h1>
          <tbody>
            <tr className='tr'>
              <td>Course Name </td>
              <td>Start Date </td>
              <td>Lesson Completed </td>
              <td>Duration </td>
            </tr>
        <Task2  img={assets.basic}  course='Basic Algorithm' lesson='25' startdate='27 Jan, 2023 ' complete='10/25(48%)'  Duration='14h 38m 56s'  />
        <Task2  img={assets.web}  course='Web Development' lesson='23' startdate='23 Feb, 2023 ' complete='40/45(97%)'  Duration='36h 30m 00s'  />
        <Task2  img={assets.data}  course='Basic Data Science' lesson='14' startdate='14 Jan, 2023 ' complete='9/37(40%)'  Duration='37h 00m 00s'  />
        <Task2  img={assets.uiux}  course='Ui/Ux Design' lesson='19' startdate='19 Feb, 2023 ' complete='26/32(84%)'  Duration='16h 40m 50s'  />
        <Task2  img={assets.project}  course='Project Management' lesson='27' startdate='27 Jan, 2023 ' complete='14/19(89%)'  Duration='13h 20m 00s'  />
       
          </tbody>


        </table>

      </div> */}

      {/* Task 3 */}
      {/* <div className="task3">
      <h3>Last Transactions</h3>
        <Task3  image={assets.img1} name='Akijith'  date='28 Feb 2023.  ' time='06:23PM' cost='13.00' status={true}  />
        <Task3  image={assets.img2} name='Daniel'  date='28 Feb 2023.  ' time='07:00PM' cost='18.00' status={false}  />
        <Task3  image={assets.img3} name='Jhonson'  date='28 Feb 2023.  ' time='09:45PM' cost='25.00' status={false}  />
        <Task3  image={assets.img4} name='Sara'  date='28 Feb 2023.  ' time='11:23PM' cost='30.00' status={true}  />
      </div> */}



{/* task 4 */}
        {/* <div className="Task4">
          <Task4 />
        </div> */}



    </div>
  )
}
export default App
