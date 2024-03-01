import React, { useState } from "react";
import axios from "axios";
import login2 from "../Assets/login1.jpg";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { jwtDecode } from "jwt-decode";



export default function LoginForm() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // Clear error message when user starts typing in the field
    setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Frontend validation
      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      // Backend validation
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email: user.email,
          password: user.password,
        }
      );

     
      const token = response.data.accessToken;
      console.log(token);
      localStorage.setItem('token', token);

            const decoded = jwtDecode(token);
            console.log(decoded.role);
      

      // Assuming successful login navigates to dashboard
      // navigate("/About");
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="main_container">
      <div className="left_div">
        <img src={login2} alt="logo img" />
        <div className="img_div_box">
          <h2>Turn Your Ideas Into Real...</h2>
          <p>Start for free and get attractive with the community</p>
        </div>
      </div>

      <div className="right_div">
        <h2>Login</h2>
        <p className="text">Welcome Back! Please enter your details below...</p>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            onChange={(e) => onInputChange(e)}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
          />
          <input
            onChange={(e) => onInputChange(e)}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
          />
          {error && (
            <div className="error" style={{ color: "red" }}>
              {error}
            </div>
          )}
          <a
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => {
              navigate("/ForgotPassword");
            }}
          >
            Forgotten Password
          </a>
          <button
            style={{ background: "rgba(15, 17, 17, 0.7)", color: "white" }}
            type="submit"
          >
            Login
          </button>
          <button
            style={{ color: "red", border: "none" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Home Page
          </button>
          <hr style={{ margin: "3vh 0" }} />
        </form>
        <div className="center_box">
          Don't Have an Account?{" "}
          <a
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => {
              navigate("/SignForm");
            }}
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
