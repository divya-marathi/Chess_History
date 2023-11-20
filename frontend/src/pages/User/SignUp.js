import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

function SignUp() {
  const navigate = useNavigate()
  const [errorMessages, setErrorMessages] = useState(false)

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  //handle input
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }


  //handling submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    // validate
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessages(true)
      return
    }

   
    setErrorMessages(false)

    try {
      
      const response = await axios.post("http://localhost:5000/signin", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })

      if (response.status === 200) {
        alert("Registration success")
        console.log(response.data.token)
        window.localStorage.setItem("token", response.data.token)
        navigate("/")
      } else {
        alert("Try again")
      }
    } catch (error) {
     
      console.error("Error during registration:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <section className="container">
      <div className="row g-0 justify-content-center align-items-center">
        <div className="col-lg-5">
          <div className="card shadow border border-success mt-5">
            <div className="card-body p-4 text-center">
              <h5 className="fw-bold mb-4">Sign up now</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="User Name"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-outline">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-outline">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>
                </div>

                {errorMessages && (
                  <p className="text-danger">All fields are required</p>
                )}

                <button
                  type="submit"
                  className="btn btn-success btn-block mb-3"
                >
                  Sign up
                </button>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="btn btn-outline-primary btn-block mb-3"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
