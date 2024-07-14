import React from 'react';
import './Signup.css'; // Adjust path as per your folder structure

export default function Signup() {
  return (
    <div className="signup">
      <div className="rectangle-40">
        <div className="container-5">
          <div className="unlock-your-potential-join-now">
            Unlock Your Potential <br />
            Join Now
          </div>
          <div className="container-6">
            <span className="first-name">
              First Name
            </span>
          </div>
          <div className="container-4">
            <span className="last-name">
              Last Name
            </span>
          </div>
          <div className="container-1">
            <span className="email">
              Email
            </span>
          </div>
          <div className="container-2">
            <span className="password">
              Password
            </span>
          </div>
          <div className="container">
            <div className="rectangle-38"></div>
            <p className="by-registering-an-account-you-agree-to-our-terms-conditions-and-privacy">
              By registering an account, you agree to our terms, conditions, and privacy policy.
            </p>
          </div>
          <div className="container-3">
            <span className="register">
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
