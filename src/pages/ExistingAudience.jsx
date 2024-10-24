import './ExistingAudience.css';
import { useNavigate } from 'react-router-dom';

export default function ExistingAudience() {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleContinue = () => {
    // Redirect to the next page (e.g., /next-step)
    navigate('/instructor/courses');
  };

  return (
    <div className="existing-audience-container">
      {/* Sidebar section */}
      <div className="existing-audience-sidebar">
        <div className="existing-audience-logo-container">
          <span className="existing-audience-logo-text">E.</span>
        </div>
      </div>

      {/* Main form section */}
      <div className="existing-audience-form-section">
        <h1 className="existing-audience-title">Expand Your Reach        </h1>
        <p className="existing-audience-description">
        Once you publish your course on Eureka, you can grow your student audience and make a meaningful impact with the support of our marketplace promotions and your own marketing efforts. Together, we’ll help the right students discover your course.
        </p>
        <div className='existing-audience-labels'>
          <p className='existing-audience-question'>Do you have an audience to share your course with?</p>
          <div className="teaching-options">
            <label className="option">
              <input type="radio" name="teachingBackground" value="selfTaught" />
              Yes, I maintain an email list of potential students
            </label>
            <label className="option">
              <input type="radio" name="teachingBackground" value="professionalTeaching" />
              Yes, I maintain an email list of potential students
            </label>
            <label className="option">
              <input type="radio" name="teachingBackground" value="onlineTeaching" />
              No, but I plan to build an audience through targeted marketing
            </label>
            <label className="option">
              <input type="radio" name="teachingBackground" value="otherTeaching" />
              No, I need assistance in reaching potential students
            </label>
          </div>
        </div>

        {/* Continue button */}
        <div className="continue-button-container">
          <button className="ve-continue-button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
