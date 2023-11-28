import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState(false);
  const [isEmail, setEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  //handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate    
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessages(true);
      return;
    }
    setErrorMessages(false)

    
    if (formData.password.length <= 3) {
      setisPassword(true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/auth/signin", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
        console.log(response.data)
      if (response.status === 200) {
        alert("Registration success")
        window.localStorage.setItem("token", response.data.token);
        
      } else if (response.status === 204) {
        setEmail(true);
        return
      } else {
        setisPassword(true);
        return
      }
    } catch (error) {
      console.error("Error while registration:", error);
    }
  };

  return (
    <section className="container">
      <div className="row g-0 justify-content-center align-items-center">
        <div className="col-lg-5">
          <div className="card shadow border border-success mt-5">
            <div className="card-body p-4 text-center">
              <h5 className="fw-bold mb-4">Sign up now</h5>
              <form onSubmit={handleSubmit}>
                <div>
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
                    {isEmail ? (
                      <p className="text-danger">Email already exists</p>
                    ) : (
                      " "
                    )}
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
                    {isPassword ? (
                      <p className="text-danger">
                        Password must be more then 3 char
                      </p>
                    ) : (
                      " "
                    )}
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
  );
}

export default SignUp;
