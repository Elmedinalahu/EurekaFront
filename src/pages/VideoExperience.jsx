import './VideoExperience.css';
import { useNavigate } from 'react-router-dom';

export default function VideoExperience() {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleContinue = () => {
    // Redirect to the next page (e.g., /next-step)
    navigate('/teaching/existing-audience');
  };

  return (
    <div className="video-experience-container">
      {/* Sidebar section */}
      <div className="video-experience-sidebar">
        <div className="video-experience-logo-container">
          <span className="video-experience-logo-text">E.</span>
        </div>
      </div>

      {/* Main form section */}
      <div className="video-experience-form-section">
        <h1 className="video-experience-title">Create Your Course, Your Way</h1>
        <p className="video-experience-description">We’ve helped tons of educators turn their homes into mini video studios, no matter their experience level. Whether you're totally new to making videos or you've got a few under your belt, we’re here to help you up your game. With easy-to-follow tips, handy tools, and all the support you need, you’ll be creating awesome videos that keep your students hooked and learning more.</p>
        <div className='video-experience-labels'>
          <p className='video-experience-question'>How comfortable are you with creating video content?</p>
          <div className="video-options">
            <label className="option">
              <input type="radio" name="teachingBackground" value="selfTaught" />
              I’ve done some basic recordings
            </label>
            <label className="option">
              <input type="radio" name="teachingBackground" value="professionalTeaching" />
              I’ve done some basic recordings
            </label>
            <label className="option">
              <input type="radio" name="teachingBackground" value="onlineTeaching" />
              I’m pretty confident
            </label>
            <label className="option">
              <input type="radio" name="teachingBackground" value="otherTeaching" />
              I’m a pro
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
