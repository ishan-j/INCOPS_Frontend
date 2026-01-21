import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const [message, setMessage] = useState({ text: '', color: '' }); // New state for messages

    const containerStyle = {
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '350px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
    };
    //const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setMessage({ text: "Passwords do not match!", color: 'red' });
            return;
        }
        try {
            await axios.post('/api/auth/register', {
                email: formData.email,
                password: formData.password
            });
            setMessage({ text: "Registered successfully!", color: 'green' });
        } catch (err) {
            setMessage({ text: "Registration failed.", color: 'red' });
        }
    };

    return (
        <div style={containerStyle}>
            <h2>Sign Up</h2>
            
            {/* Display message on screen instead of alert */}
            {message.text && (
                <p style={{ color: message.color, fontWeight: 'bold' }}>{message.text}</p>
            )}

            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" style={inputStyle} required
                    onChange={(e) => setFormData({...formData, email: e.target.value})} />
                
                <input type="password" placeholder="Password" style={inputStyle} required
                    onChange={(e) => setFormData({...formData, password: e.target.value})} />
                
                <input type="password" placeholder="Re-enter Password" style={inputStyle} required
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
                
                <button type="submit" style={buttonStyle}>Register</button>
            </form>
        </div>
    );
};

export default Register;