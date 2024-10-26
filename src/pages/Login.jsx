import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import { setToken } from '../utils/auth'; // Import the token utility
import { useState } from 'react';
import '../pages/Login.css'; // Import your CSS styles

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  // Get the "from" state, or default to "/dashboard" if not provided
  const redirectTo = location.state?.from || '/Landing';

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    setIsSubmitting(true); // Disable the button while submitting
    setErrorMessage(''); // Clear previous error messages

    try {
      // Make the API call to log in
      const response = await axios.post('https://api.eurekaelearn.com/api/Account/login', {
        email, // Use the state values directly
        password
      }, {
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      });

      const { token } = response.data; // Assuming the token is returned in the response data
      setToken(token); // Save the token to localStorage

      console.log('Login successful, token set:', token);
      navigate(redirectTo); // Redirect after successful login
    } catch (error) {
      console.error('Login failed', error.response?.data || error.message);
      setErrorMessage('Login failed! Please check your credentials and try again.'); // Update the error message
    } finally {
      setIsSubmitting(false); // Re-enable the button after processing
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update the password state
  };

  return (
    <div className="login-student">
      <div className="login-student-container">
        <div className="login-student-left">
          {/* You can add any additional content or branding here */}
        </div>
        <div className="login-student-right">
          <div className="login-student-header">
            Welcome to <br />
            the next level.
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-student-container">
              <input
                className="loginstudent-input"
                placeholder="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-student-container">
              <input
                className="loginstudent-input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div>
              <button type="submit" className="login-din" disabled={isSubmitting}>
                {isSubmitting ? 'Signing In...' : 'Sign In'} {/* Change button text based on submitting state */}
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
            <div className="dont-have-an-account">
              Don't have an account? <a href="/signup" className="signin-color">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
