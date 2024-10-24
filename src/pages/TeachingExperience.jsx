import './TeachingExperience.css';
import { useNavigate } from 'react-router-dom';

export default function TeachingExperience() {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleContinue = () => {
    // Redirect to the next page (e.g., /next-step)
    navigate('/teaching/video-experience');
  };

  return (
    <div className="teaching-experience-container">
      {/* Sidebar section */}
      <div className="teaching-experience-sidebar">
        <div className="teaching-experience-logo-container">
          <span className="teaching-experience-logo-text">E.</span>
        </div>
      </div>

      {/* Main form section */}
      <div className="teaching-experience-form-section">
        <h1 className="teaching-experience-title">Let's Make Learning Happen!</h1>
        <p className="teaching-experience-description">
          At Eureka, we're all about sharing knowledge in fun, creative, and impactful ways. Whether you're a seasoned teacher or simply passionate about what you know, we'll help you build courses that connect and empower learners. It's time to turn your expertise into something meaningful. Ready to start? Let's do this together!
        </p>
        <div className='teaching-experience-labels'>
          <p className='teaching-experience-question'>What's your background in teaching?</p>
          <div className="teaching-options-v2">
            <label className="option-item">
              <input className="option-radio" type="radio" name="teachingBackground" value="selfTaught" />
              Shared informally with friends or colleagues
            </label>
            <label className="option-item">
              <input className="option-radio" type="radio" name="teachingBackground" value="professionalTeaching" />
              Taught in classrooms or training sessions
            </label>
            <label className="option-item">
              <input className="option-radio" type="radio" name="teachingBackground" value="onlineTeaching" />
              Taught online or virtually
            </label>
            <label className="option-item">
              <input className="option-radio" type="radio" name="teachingBackground" value="otherTeaching" />
              Something else? Tell us!
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
