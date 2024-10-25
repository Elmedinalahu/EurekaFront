import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Ensure your CSS file is properly linked

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7143/api/Account/student/signup', {
        DisplayName: `${formData.firstName} ${formData.lastName}`,
        Email: formData.email,
        Password: formData.password
      });
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Registration failed', error.response.data);
    }
  };

  return (
    <div className=" signup-student">
      <div className=" signup-student-container">
        <div className=" signup-student-left">
        </div>
        <div className=" signup-student-right">
          <div className=" signup-student-header">
            Unlock Your Potential <br />
            Join Now
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-student-container">
              <input
                className='sigupstudent-input'
                placeholder='First Name'
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-student-container">
              <input
                className='sigupstudent-input'
                placeholder='Last Name'
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-student-container">
              <input
                className='sigupstudent-input'
                placeholder='Email'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-student-container">
              <input
                className='sigupstudent-input'
                placeholder='Password'
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button type="submit" className="register-din">Register</button>
            </div>
          </form>
          <div className="already-student-have-an-account">
            Already have an account? <a href="/login" style={{ color: '#7a4988', textDecoration: 'none' }}>Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}
