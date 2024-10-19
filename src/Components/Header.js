// src/components/Header.js
import React from 'react';
// import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="greeting">
        <h1>Hello Sumea!</h1>
        <p>It's good to see you again.</p>
      </div>
      <div className="user-info">
        <input type="text" placeholder="Search" />
        <div className="avatar" />
      </div>
    </div>
  );
};

export default Header;
