import React, { useState } from 'react'
import { useFormik } from 'formik';
import {useNavigate} from "react-router"
import Swal from "sweetalert2";

const AddVehicle = () => {
    const navigate = useNavigate();
    const [setImage, setSetImage] = useState('');

    const vehicleForm = useFormik({
        initialValues: {
            title: "",
            category: "",
            ingredients: "",
            method: "",
            image: ""
        },

        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            values.image = setImage;
            const res = await fetch('http://localhost:5000/vehicle/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Vehicle Added Successfully!'
                })

                // Reset the form values after a successful submission
                navigate('/Browse')
            } else if (res.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: "Invalid Credentials!",
                    text: 'Plz Try Again'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            }


        },
    });

    const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSetImage(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: fd
        });

        console.log(res.status);
    };

    return (
        <section
            className="vehicle"
            >
            <div className="container-fluid">
                <div className=" vehicle-card ">
                    <div className="col-12 col-md-4 col-lg-3 h-50 w-auto">
                        <div className="card shadow">
                            <div className="vehicle-card-body mx-auto w-100">
                                <h4 className="card-title mt-1 mb-4 text-center fw-bold fs-2">Add Vehicle</h4>
                                <form className='' onSubmit={vehicleForm.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label fw-bold fs-5">
                                            <h4 className='addvehicle-h4'>Vehicle Title</h4>
                                        </label>
                                        <input
                                            placeholder='Vehicle Name'
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name='title' onChange={vehicleForm.handleChange} value={vehicleForm.values.model}
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="model" className="form-label fw-bold fs-5">
                                        <h4 className='addvehicle-h4'>Models</h4>
                                        </label>
                                        <input
                                            placeholder='Model Name'
                                            type="text"
                                            className="form-control"
                                            id="model"
                                            name='model' onChange={vehicleForm.handleChange} value={vehicleForm.values.model}
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="information" className="form-label fw-bold fs-5">
                                        <h4 className='addvehicle-h4'> Information</h4>
                                        </label>
                                        <textarea
                                            placeholder='Information'
                                            className="form-control"
                                            id="Information"
                                            name="information" onChange={vehicleForm.handleChange} value={vehicleForm.values.information}
                                            rows={4}
                                            required=""
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="detail" className="form-label fw-bold fs-5">
                                        <h4 className='addvehicle-h4'>Details</h4>
                                        </label>
                                        <textarea
                                            placeholder='Details...'
                                            className="form-control"
                                            id="detail"
                                            name='detail' onChange={vehicleForm.handleChange} value={vehicleForm.values.detail}
                                            rows={6}
                                            required=""
                                            defaultValue={""}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="title" className="form-label fw-bold fs-5">
                                        <h4 className='addvehicle-h4'> Upload Photo</h4>
                                        </label>
                                        <input
                                            type="file"
                                            className=" upload form-control"
                                            id="image"
                                            name='image'
                                            onChange={uploadFile}
                                            required=""
                                        />
                                    </div>
                                    <button type="submit" className="addvehicle-h4 btn btn-light">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AddVehicle