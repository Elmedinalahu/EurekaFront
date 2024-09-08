// src/components/CourseCard.js
import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, author, time, rating }) => {
  return (
    <div className="card">
      <div className="course-info">
        <div className="course-icon" />
        <div className="course-details">
          <h3 className="course-title">{title}</h3>
          <p className="course-author">{author}</p>
          <p>{time}</p>
          <p>{rating}</p>
        </div>
      </div>
      <button className="course-button">View course</button>
    </div>
  );
};

export default CourseCard;
