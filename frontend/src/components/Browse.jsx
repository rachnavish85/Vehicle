import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component'

const Browse = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  const navigate = useNavigate();

  const [vehicleList, setvehicleList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/vehicle/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setvehicleList(data);
      setMasterList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filterVehicle = (e) => {
    const value = e.target.value;
    setvehicleList(masterList.filter((vehicle) => { return (vehicle.title.toLowerCase().includes(value.toLowerCase()) || vehicle.category.toLowerCase().includes(value.toLowerCase())) }));
  }

  const displayVehicleData = () => {
    if (vehicleList.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }
    return vehicleList.map((vehicle) => (
      <div className=' browse-card col-md-3 mb-3'>
        <div className="browse-card">
          <img src={'http://localhost:5000/' + vehicle.image} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 240 }} />
          <div className="card-footer">
            <h4>{vehicle.title}</h4>
            <p>{vehicle.category}</p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              value={4}
              size={28}
              activeColor='#ffd700'
            />
            <button className='btn btn-outline-danger mb-2 me-1 px-3' onClick={() => { navigate('/Showvehicle/' + vehicle._id) }}>Click to View</button>
          </div>
        </div>
      </div>
    ))
  }
  return (
    <div className='browse-background' style={{  minHeight: '100vh' }}>
      <header>
        <div className="container py-4">
          <p className="display-2 text-center fw-bold " style={{ color: "black" }}>
            VEHICLES  COLLECTIONS
          </p>
          <input type="text" className="form-control w-75 m-auto" onChange={filterVehicle} />
        </div>
      </header>
      <div>
        <div className="container">
          <div className="row">
            {displayVehicleData()}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Browse