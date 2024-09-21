// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar.js';
import Header from './Header.js';
import CourseCard from './CourseCard.js';
import Statistics from './Statistics.js';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <h2>Courses</h2>
        <div className="course-list">
          <CourseCard title="Learn Figma" author="Christopher Morgan" time="6h 30min" rating="4.9" />
          <CourseCard title="Analog photography" author="Gordon Norman" time="8h 15min" rating="4.7" />
          <CourseCard title="Master Instagram" author="Sophie Gill" time="7h 40min" rating="4.6" />
          <CourseCard title="Basics of drawing" author="Jean Tate" time="11h 30min" rating="4.8" />
          <CourseCard title="Photoshop - Essence" author="David Green" time="5h 15min" rating="4.7" />
        </div>
        <Statistics />
      </div>
    </div>
  );
};

export default Dashboard;
