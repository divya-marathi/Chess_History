import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [isErrorMessages, setErrorMessages] = useState(false);
  const [isEmail, setEmail] = useState(false)
  const [isPassword, setPassword] = useState(false);

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

    if (!formData.email || !formData.password) {
      setErrorMessages(true);
      return;
    }
    setErrorMessages(false);

    if (formData.password.length < 3) {
      setPassword(true)
      return
    }
    setPassword(false);

    try {
      let response = await axios.post("http://localhost:5000/auth/login", {
        email: formData.email,
        password: formData.password,
      })
console.log(response.data)
      if (response.status === 200) {
        alert("Login  success");
        window.localStorage.setItem("token", response.data.token);
        navigate("/");
      } else if (response.status === 203) {
         setPassword(true)
        return
      }else{
       setEmail(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="container-fluid">
      <div className="row g-0 justify-content-center align-items-center">
        <div className="col-lg-4">
          <div className="card shadow border border-success mt-5 ">
            <div className="card-body p-4 text-center">
              <h5 className="fw-bold mb-4">Login</h5>
              <form onSubmit={handleSubmit}>
                <div>
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
                    </div>{
                      isEmail?(  <p className="text-danger">User not found!</p>
                      ):(" ")
                    }
                   
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
                    {isPassword ? <p className="text-danger">Invalid!</p> : " "}
                  </div>
                </div>
                {isErrorMessages && (
                  <p className="text-danger">All fields are required</p>
                )}{" "}
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
