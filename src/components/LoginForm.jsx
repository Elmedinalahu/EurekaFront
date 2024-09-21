import { useState } from 'react';
import "../pages/Login.css";

const LoginForm = ({ onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous errors
    // You might want to reset error messages on form submission
    // setError(''); 

    // Perform simple validation
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    // Call the onSubmit function passed from the parent component (Login.js)
    onSubmit(email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <div className="rectangle-40">
        <div className="container-5">
          <div className="welcome-to-the-next-level">
            Welcome to <br />
            the next level.
          </div>
          <form onSubmit={handleSubmit}>
            <div className="container-1">
              <input
                type="email"
                className="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="container-2">
              <input
                type="password"
                className="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="container">
              <div className="keep-me-logged-in-wrapper">
                <div className="rectangle-38"></div>
                <p className="keep-me-logged-in">Keep me logged in</p>
              </div>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <div className="container-3">
              <button type="submit" className="sign-in">Sign In</button>
            </div>
            {/* Display error message if there is an error */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="dont-have-an-account">
              Don't have an account? <a href="/signup">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
