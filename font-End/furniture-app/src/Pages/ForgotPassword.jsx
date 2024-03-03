import React, { useState } from "react";
import axios from "axios";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [showOtpInput, setShowOtpInput] = useState(false);

  let navigate = useNavigate();

  const [changePassword, setChangePassword] = useState({
    password: "",
    repeatPassword: ""
  });

  const { password, repeatPassword } = changePassword;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setChangePassword({ ...changePassword, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8090/forgotPassword/verifyMail/${email}`
      );
      setRegistrationSuccess(true);
      setSuccessMessage(response.data);
      setErrorMessage("");
      setShowEmailInput(false);
    } catch (error) {
      console.error("Error occurred while verifying email:", error.response.data.error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
      setSuccessMessage("");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8090/forgotPassword/verifyOtp/${otp}/${email}`
      );
      setSuccessMessage(response.data);
      setErrorMessage("");
      setShowOtpInput(true);
      setRegistrationSuccess(false);
    } catch (error) {
      console.error("Error occurred while verifying OTP:", error.response.data.error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
      setSuccessMessage("");
    }
  };

  const passwordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8090/forgotPassword/changePassword/${email}`,
        changePassword
      );
      setSuccessMessage(response.data);
      setErrorMessage("");
      setShowEmailInput(false);
      navigate("/LoginForm")
    } catch (error) {
      console.error("Error occurred while changing password:", error.response.data.error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
      setSuccessMessage("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Forgot Password</h2>
      {successMessage && (
        <div style={{ color: "green", marginBottom: "10px" }}>
          {successMessage}
        </div>
      )}

      {showEmailInput && (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={{ marginLeft: "5px", width: "500px" }}
            />
          </div>
          {errorMessage && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            style={{
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </form>
      )}

      {registrationSuccess && (
        <form
          onSubmit={handleOtpSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label>Enter your OTP:</label>
            <input
              type="number"
              value={otp}
              onChange={handleOtpChange}
              style={{ marginLeft: "5px", width: "500px" }}
            />
          </div>
          {errorMessage && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            style={{
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </form>
      )}

      {showOtpInput && (
        <form
          onSubmit={passwordSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
              name="password"
              style={{ marginLeft: "5px", width: "500px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Repeat Password:</label>
            <input
              type="password"
              value={repeatPassword}
              onChange={handleChangePassword}
              name="repeatPassword"
              style={{ marginLeft: "5px", width: "500px" }}
            />
          </div>
          {errorMessage && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            style={{
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
