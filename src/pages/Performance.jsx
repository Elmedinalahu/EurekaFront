import './Performance.css';
import { MdOndemandVideo } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BsClipboardData } from "react-icons/bs";
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Performance() {
  const navigate = useNavigate(); // Hook to navigate between pages
  const [activeIcon, setActiveIcon] = useState('video'); // State to track the active icon
  const [showSubcategories, setShowSubcategories] = useState(false); // State to toggle subcategories

  const handleIconClick = (icon) => {
    console.log(`Icon clicked: ${icon}`); // Log clicked icon
    setActiveIcon(icon); // Update active icon state
    if (icon === 'data') {
      setShowSubcategories(!showSubcategories); // Toggle subcategories visibility
    } else {
      setShowSubcategories(false); // Hide subcategories if another icon is clicked
    }
  };

  // Hardcoded data for Overview, Students, and Reviews
  const overviewData = {
    totalStudents: 120,
    averageRating: 4.5,
    completionRate: 85,
    enrollmentData: [
      { date: '2023-01', enrollment: 20 },
      { date: '2023-02', enrollment: 30 },
      { date: '2023-03', enrollment: 25 },
      { date: '2023-04', enrollment: 35 },
    ]
  };

  const studentsData = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', progress: 75 },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', progress: 50 },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', progress: 90 },
  ];

  const reviewsData = [
    { id: 1, comment: 'Great course!', rating: 5, reviewer: 'Alice' },
    { id: 2, comment: 'Very informative.', rating: 4, reviewer: 'Bob' },
    { id: 3, comment: 'Loved it!', rating: 5, reviewer: 'Charlie' },
  ];

  return (
    <div className="course-create-container">
      {/* Sidebar section */}
      <div className="course-create-sidebar">
        <div className="course-create-logo-container">
          <span className="course-create-logo-text">Eureka</span>
          <div className='instructor-course-icons'>
            {/* First Row: Video Courses */}
            <div
              className={`instructor-course-row ${activeIcon === 'video' ? 'active' : ''}`}
              onClick={() => handleIconClick('video')}
            >
              <MdOndemandVideo className="course-create-icon" />
              <span className='category'>Courses</span>
            </div>

            {/* Second Row: Performance Data */}
            <div
              className={`instructor-course-row ${activeIcon === 'data' ? 'active' : ''}`}
              onClick={() => handleIconClick('data')}
            >
              <BsClipboardData className="course-create-data" />
              <span className='category'>Performance</span>
            </div>
          </div>

          {/* Subcategories for Performance */}
          {showSubcategories && (
            <div className="performance-subcategories">
              <div className={`subcategory ${activeIcon === 'overview' ? 'active' : ''}`} onClick={() => setActiveIcon('overview')}>
                Overview
              </div>
              <div className={`subcategory ${activeIcon === 'students' ? 'active' : ''}`} onClick={() => setActiveIcon('students')}>
                Students
              </div>
              <div className={`subcategory ${activeIcon === 'reviews' ? 'active' : ''}`} onClick={() => setActiveIcon('reviews')}>
                Reviews
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="instructor-intro-container">
        <header className="course-intro-header">
          <h1 className='course-intro-header1'>
            {activeIcon === 'video' ? 'Your Courses' : activeIcon === 'data' ? 'Performance Overview' : activeIcon.charAt(0).toUpperCase() + activeIcon.slice(1)}
          </h1>
        </header>

        {/* Render active section content */}
        {activeIcon === 'data' && (
          <div className="performance-content">
            {/* Overview Section */}
            {activeIcon === 'overview' && (
              <div className="overview-section">
                <h2>Overview</h2>
                
                <p>Total Students: {overviewData.totalStudents}</p>
                <p>Average Rating: {overviewData.averageRating}</p>
                <p>Completion Rate: {overviewData.completionRate}%</p>

                {/* Line Chart for Enrollment Over Time */}
                <h3>Enrollment Over Time</h3>
                <LineChart width={600} height={300} data={overviewData.enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="enrollment" stroke="#82ca9d" />
                </LineChart>
              </div>
            )}

            {/* Students Section */}
            {activeIcon === 'students' && (
              <div className="students-section">
                <h2>Students</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentsData.map(student => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.progress}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Reviews Section */}
            {activeIcon === 'reviews' && (
              <div className="reviews-section">
                <h2>Reviews</h2>
                <div>
                  {reviewsData.map(review => (
                    <div key={review.id} className="review-item">
                      <p>{review.comment}</p>
                      <p><strong>Rating:</strong> {review.rating}</p>
                      <p><strong>Reviewer:</strong> {review.reviewer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
