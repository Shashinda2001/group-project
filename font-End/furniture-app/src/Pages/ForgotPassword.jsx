import React, { useState } from 'react';
import axios from 'axios';
import '../css/register.css';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8090/forgotPassword/verifyMail/${email}`);
            // Assuming your backend returns a message in the response
            setSuccessMessage(response.data.message);
            setErrorMessage(''); // Clear any previous error messages
        } catch (error) {
            console.error('Error occurred while verifying email:', error);
            setErrorMessage('An unexpected error occurred.');
            setSuccessMessage(''); // Clear any previous success messages
        }
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} style={{ marginLeft: '5px', width:'500px' }} />
                </div>
                {errorMessage && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>}
                <button type="submit" style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
            </form>
        </div>
    );
}
