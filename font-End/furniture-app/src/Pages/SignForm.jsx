import signcover from '../Assets/signcover.jpeg';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../css/register.css';

export default function SignForm() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    });
    const [backEndErrors, setBackEndErrors] = useState([]); // State to store backend error messages
    const [errors, setErrors] = useState({}); // State to store field validation errors
    const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to track registration success

    const { email, password, username, cpassword } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // Clear validation error message when user starts typing in the field
        setErrors({ ...errors, [e.target.name]: "" });
        // Clear backend error message when there's a change in email or username
        if (e.target.name === "email" || e.target.name === "username") {
            setBackEndErrors([]);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // Perform frontend validation before submitting the form
            const validationErrors = {};
            if (!username) {
                validationErrors.username = "Username is required";
            }
            if (!email) {
                validationErrors.email = "Email is required";
            }
            if (!password) {
                validationErrors.password = "Password is required";
            } else if (password.length < 5) {
                validationErrors.password = "Password must be at least 5 characters long";
            }
            if (!cpassword) {
                validationErrors.cpassword = "Confirm Password is required";
            }
            if (password !== cpassword) {
                validationErrors.cpassword = "Passwords do not match";
            }
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return; // Don't submit the form if there are validation errors
            }
            
            // If no validation errors, submit the form
            await axios.post("http://localhost:8090/api/v1/auth/register", {
                username: user.username,
                email: user.email,
                password: user.password,
                cpassword: user.cpassword
            });
            setRegistrationSuccess(true); // Set registration success to true
            setTimeout(() => {
                navigate("/LoginForm"); // Navigate to login form after delay
            }, 3000); // Delay for 3 seconds
        } catch (error) {
            console.error("Error occurred while registering:", error);
            if (error.response && error.response.data) {
                setBackEndErrors([error.response.data]);
            } else {
                setBackEndErrors(["An unexpected error occurred"]);
            }
        }
    }

    return (
        <div className='main_container'>
            <div className="left_div">
                <img src={signcover} alt="logo img" />
                <div className='img_div_box'>
                    <h2>Join for Exclusive Benefits...</h2>
                    <p>Join our community, connect with enthusiasts, and access exclusive offers. Register now to turn your design dreams into reality!</p>
                </div>
            </div>

            <div className="right_div">
                <h2>Register</h2>
                <p className='text'>Please Enter Your Details below...</p>
                {backEndErrors.map((error, index) => (
                    <div key={index} className="error" style={{ color: 'red' }}>{error}</div>
                ))} {/* Display backend error messages */}
                {registrationSuccess && <div className="success" style={{ color: 'green' }}>Verification email sent</div>} {/* Display success message */}
                <form onSubmit={(e) => onSubmit(e)}>
                    <input onChange={(e) => onInputChange(e)} type='text' placeholder='username' name='username' value={username} />
                    {errors.username && <div className="error" style={{ color: 'red' }}>{errors.username}</div>} {/* Display username error message */}
                    <input onChange={(e) => onInputChange(e)} type='email' placeholder='Email' name='email' value={email} />
                    {errors.email && <div className="error" style={{ color: 'red' }}>{errors.email}</div>} {/* Display email error message */}
                    <input onChange={(e) => onInputChange(e)} type='password' placeholder='Password' name='password' value={password} />
                    {errors.password && <div className="error" style={{ color: 'red' }}>{errors.password}</div>} {/* Display password error message */}
                    <input onChange={(e) => onInputChange(e)} type='password' placeholder='Confirm Password' name='cpassword' value={cpassword} />
                    {errors.cpassword && <div className="error" style={{ color: 'red' }}>{errors.cpassword}</div>} {/* Display cpassword error message with red color */}
                   
                    <button style={{ background: "rgba(15, 17, 17, 0.7)", color: "white" }} type='submit'>signIn</button>
                    <button style={{ color: "red", border: "none" }} onClick={() => { navigate('/') }}>Home Page</button>
                    <hr style={{ margin: "3vh 0" }} />
                </form>
                <div className='center_box'>
                    back to <a style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => { navigate('/LoginForm') }}> Login</a>
                </div>
            </div>
        </div>
    );
}
