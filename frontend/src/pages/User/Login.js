import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState(false);

  const [formData, setFormData] = useState({    
    email: "",
    password: "",
  });


  //handling input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }


//handling submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    let response = await axios.post("http://localhost:5000/login", {     
      email: formData.email,
      password: formData.password,
    });

    if (response.status === 501) {
      setErrorMessages(true);
      return;
    }

    if (response.status === 200) {
      alert("Login  success");
      console.log(response.data.token);
      window.localStorage.setItem("token", response.data.token);
      navigate("/");
    } else {
      alert("Try again");
    }
  };

  return (
    <section className="container-fluid">
      <div className="row g-0 justify-content-center align-items-center">
        <div className="col-lg-4">
          <div className="card shadow border border-success mt-5 ">
            <div className="card-body p-4 text-center">
              <h5 className="fw-bold mb-4">Login</h5>
              <form onSubmit={handleSubmit}>
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

                <button
                  type="submit"
                  className="btn btn-success btn-block mb-3"
                >
                  Log In
                </button>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="btn btn-outline-primary btn-block mb-3"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
