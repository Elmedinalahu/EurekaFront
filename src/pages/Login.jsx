import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login">
      <div className="rectangle"></div>
      <div className="content">
        <div className="welcome-to-the-next-level">
          Welcome to <br />
          the next level!
        </div>
        <div className="container-1">
          <span className="email">Email</span>
        </div>
        <div className="container-2">
          <span className="password">Password</span> {/* Text "Password" here */}
        </div>
        <div className="container">
          <div className="rectangle-38"></div> {/* Small box */}
          <p className="keep-me-logged-in">Keep me logged in</p>
          <p className="forgot-password">Forgot Password ?</p>
        </div>
        <div className="container-3">
          <span className="sign-in">Sign in</span>
        </div>
        <p className="dont-have-an-account">
          Don't have an account? <span className="register">Register</span>
        </p>
      </div>
    </div>
  );
}