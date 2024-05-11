import React from 'react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4, 'Too short!').max(20, 'Too Long!').required('Required'),
})

const Signup = () => {

  const navigate = useNavigate();

  const SignupForm = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      createdAt: new Date()
    },
    onSubmit: async (values, action) => {

      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }

      });
      console.log(res.status)
      action.resetForm();

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Signup Success',
          text: 'You have been successfully signed up!',
        })
        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })

      }
    },
    validationSchema: SignupSchema,
  });

  return (
    <div className='signup'>
      {/* Section: Design Block */}
      <section className="text-center text-lg-start bg-tertiary">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
          }}
        />
        {/* Jumbotron */}
        <div className=" signup-container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="signup-card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)"
                }}
              >
                <div className="signup-card-body p-5 shadow-5 text-center">
                  <h2 className=" signup-now fw-bold mb-5 ">Sign Up Now</h2>
                  <form onSubmit={SignupForm.handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label fw-bold" htmlFor="form3Example1">
                            <h4 className='signup-h4'>First name</h4>
                          </label>
                          <input
                            type="text"
                            id="fname"
                            onChange={SignupForm.handleChange}
                            value={SignupForm.values.fname}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label fw-bold" htmlFor="form3Example2">
                          <h4 className='signup-h4'>Last name</h4>
                          </label>
                          <input
                            type="text"
                            id="lname"
                            onChange={SignupForm.handleChange}
                            value={SignupForm.values.lname}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <label className="form-label fw-bold" htmlFor="form3Example3">
                      <h4 className='signup-h4'>Email address</h4>
                      </label>
                      <input
                        type="email"
                        id="email"
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.email}
                        className="form-control"
                      />
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4 fw-bold">
                      <label className="form-label" htmlFor="form3Example4">
                      <h4 className='signup-h4'>Password</h4>
                      </label>
                      <input
                        type="password"
                        id="password"
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.password}
                        className="form-control"
                      />
                    </div>
                    {/* Checkbox */}

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                    <h4 className='signup-h4'>Sign up</h4>
                    </button>

                  </form>
                </div>
              </div>
            </div>
            </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </div>

  )
}

export default Signup