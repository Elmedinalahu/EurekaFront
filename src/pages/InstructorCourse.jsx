import './InstructorCourse.css';
import { MdOndemandVideo } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BsClipboardData } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { VscSignIn, VscSignOut } from "react-icons/vsc";
import { jwtDecode } from 'jwt-decode';

export default function InstructorCourse() {
  const navigate = useNavigate(); // Hook to navigate between pages
  const [activeIcon, setActiveIcon] = useState('video'); // State to track the active icon
  const [instructorName, setInstructorName] = useState(''); // State to store the instructor's name
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token); // Decode the token
      setInstructorName(decodedToken.given_name || decodedToken.DisplayName || 'Instructor'); // Extract the name or set a default
      setIsLoggedIn(true); // User is logged in
    } else {
      setInstructorName(''); // No user logged in
      setIsLoggedIn(false); // User is logged out
    }
  }, []);

  const handleUploadCourse = () => {
    navigate('/instructor/create-course'); // Redirect to the course upload page
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon); // Update active icon state
    // Add navigation logic if needed
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token'); // Remove token on logout
      setIsLoggedIn(false); // Update state to logged out
      navigate('/login'); // Redirect to login page
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  return (
    <div className="instructor-courses-container">
      {/* Sidebar section */}
      <div className="instructor-courses-sidebar">
        <div className="instructor-courses-logo-container">
          <span className="instructor-courses-logo-text">Eureka</span>
          <div className="instructor-course-icons">
            {/* First Row: Video Courses */}
            <div
              className={`instructor-course-row ${activeIcon === 'video' ? 'active' : ''}`}
              onClick={() => handleIconClick('video')}
            >
              <MdOndemandVideo className="instructor-courses-icon" />
              <span className="category">Courses</span>
            </div>

            {/* Second Row: Performance Data */}
            <div
              className={`instructor-course-row ${activeIcon === 'data' ? 'active' : ''}`}
              onClick={() => handleIconClick('data')}
            >
              <BsClipboardData className="instructor-courses-data" />
              <span className="category">Performance</span>
            </div>
          </div>
          <div className="instructor-courses-footer">
            <div
              className="instructor-course-row logout-row"
              onClick={handleLoginLogout}
            >
              {/* Conditionally render the sign-in or sign-out icon */}
              {isLoggedIn ? (
                <VscSignOut className="instructor-courses-icon" />  // Display VscSignOut if logged in
              ) : (
                <VscSignIn className="instructor-courses-icon" />  // Display VscSignIn if not logged in
              )}
              <span className="category">{isLoggedIn ? 'Logout' : 'Login'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor Dashboard Main Content */}
      <div className="instructor-intro-container">
        <header className="instructor-intro-header">
          <h1>Hi, {instructorName}!</h1> {/* Dynamically display the instructor's name */}
        </header>

        <main className="instructor-intro-content">
          <p>Welcome to your instructor dashboard! Here, you can manage your courses and connect with your students.</p>

          <div className="upload-course-prompt">
            <div>
              <h2>Ready to Share Your Knowledge?</h2>
              <p>Click the button below to upload your first course and start teaching!</p>
            </div>
            <div>
              <button className="upload-course-button" onClick={handleUploadCourse}>
                Upload Your First Course
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
