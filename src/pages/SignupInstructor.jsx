import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { setToken } from '../utils/auth'; // Token management utility
import './SignupInstructor.css';

export default function SignupInstructor() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(''); // Clear previous error messages
    try {
      const response = await axios.post('https://localhost:7143/api/Account/instructor/signup', {
        DisplayName: `${formData.firstName} ${formData.lastName}`,
        Email: formData.email,
        Password: formData.password
      });
      
      const { token } = response.data; // Assuming the token is returned
      setToken(token); // Save the token to localStorage

      setSuccessMessage('Registration successful! Redirecting...');
      setTimeout(() => {
        navigate('/teaching/teaching-experience');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Registration failed', error.response?.data || error.message);
      setErrorMessage('Registration failed! Please check your details and try again.');
    } finally {
      setIsSubmitting(false); // Re-enable the button after processing
    }
  };

  return (
    <div className="signup-din">
      <div className="signup-din-container">
        <div className="signup-din-left"></div>
        <div className="signup-din-right">
          <div className="signup-din-header">
            Start Teaching Today!
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-din-container">
              <input
                className="sigup-input"
                placeholder="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="input-din-container">
              <input
                className="sigup-input"
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="input-din-container">
              <input
                className="sigup-input"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="input-din-container">
              <input
                className="sigup-input"
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <button
                type="submit"
                className="register-din"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
          
          {/* Display success or error message */}
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          
          <div className="already-din-have-an-account">
            Already have an account? <a href="/login" style={{ color: '#7a4988', textDecoration: 'none' }}>Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}
