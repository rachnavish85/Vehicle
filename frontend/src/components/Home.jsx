import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <img className='car-home' src='https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds' />
    <Link to={'http://localhost:5173/login'}>
      <button type="button" class=" get-start btn btn-outline-warning">Get Start</button>
      </Link>
    <h1 className='best'>
      BEST COLLECTION <br/> <span className='of'>OF</span> <br/>VEHICLES
    </h1>
      <img className='car1' src='public\car\car.jpg'/>
      <img className='car2' src='public\car\car1.jpg'/>
      <img className='car3' src='public\car\car2.jpg'/>
      <img className='car4' src='public\car\car3.jpg'/>

<img src='public\scorpio\Mahindra Thar - Deep Grey.jpg' />
<h1 className='thar-h1'>"Thar was designed to be a rugged, reliable and <br/>
affordable off-road vehicle that could handle
 the rough<br/> terrain found in many parts of India."</h1>
    </div>
      
  )
}
export default Home
 