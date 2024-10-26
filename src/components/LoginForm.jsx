import { useState } from 'react';
import '../pages/Login.css';
import { setToken } from '../utils/auth'; // Import the token utility

const LoginForm = ({ onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return; // Add validation logic here
    }
    try {
      const token = await onSubmit(email, password); // Assuming `onSubmit` returns a token on success
      console.log(token); // Log the token for debugging

      setToken(token); // Save the token
      console.log('Login successful, token set:', token); // Log the token for debugging
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-student">
      <div className="login-student-container">
        <div className="login-student-left">
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
              <button type="submit" className="login-din">Sign In</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="dont-have-an-account">
              Don't have an account? <a href="/signup" className="signin-color">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
