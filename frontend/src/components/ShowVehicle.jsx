import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ShowVehicle = () => {

  const { id } = useParams();

  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/vehicle/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (

    <div className="show-background" style={{ backgroundImage: "url()" }}>
      <div className="show-container1" >
        <div className="showvehicle-card ">
          <div className="card my-2 ">
            <div className='card-body'>
              <span className=" text-center fw-bold d-block display-5 mb-3" style={{fontFamily:"cursive"}}> {userData.title} </span>
              <img src={'http://localhost:5000/' + userData.image} alt="" className=" card-img " style={{ objectFit: "cover", height:400 }} />
            </div>

            <div className="card-footer" style={{backgroundColor:"whitesmoke"}}>
              <h4 className="display-5 fw-bold text-center" style={{fontFamily:"cursive"}}>👉  {userData.model} 👈</h4>
              <h5><span className="fw-bold fs-4">Information - </span>{userData.information} </h5>
              <h5><span className="fw-bold fs-4">Details </span><pre>{userData.detail}</pre></h5>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ShowVehicle  