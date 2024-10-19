import React from "react";
import "./CardGrid.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUserGraduate,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Grid = ({ image, title, description, buttonText, buttonLink, price }) => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="icon-container">
          <div className="icon">
            <FontAwesomeIcon icon={faBook} />
            <span>Lesson: 2</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUserGraduate} />
            <span>Student: 4</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
            <span>Beginner</span>
          </div>
        </div>
        <div className="card-footer">
          <a href={buttonLink} className="card-button">
            {buttonText}
          </a>
          <div className="card-price">39,00$</div>
        </div>
      </div>
      <div className="grid-item">
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="icon-container">
          <div className="icon">
            <FontAwesomeIcon icon={faBook} />
            <span>Lesson: 2</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUserGraduate} />
            <span>Student: 4</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
            <span>Beginner</span>
          </div>
        </div>
        <div className="card-footer">
          <a href={buttonLink} className="card-button">
            {buttonText}
          </a>
          <div className="card-price">39,00$</div>
        </div>
      </div>{" "}
      <div className="grid-item">
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="icon-container">
          <div className="icon">
            <FontAwesomeIcon icon={faBook} />
            <span>Lesson: 2</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUserGraduate} />
            <span>Student: 4</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
            <span>Beginner</span>
          </div>
        </div>
        <div className="card-footer">
          <a href={buttonLink} className="card-button">
            {buttonText}
          </a>
          <div className="card-price">39,00$</div>
        </div>
      </div>{" "}
      <div className="grid-item">
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="icon-container">
          <div className="icon">
            <FontAwesomeIcon icon={faBook} />
            <span>Lesson: 2</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUserGraduate} />
            <span>Student: 4</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
            <span>Beginner</span>
          </div>
        </div>
        <div className="card-footer">
          <a href={buttonLink} className="card-button">
            {buttonText}
          </a>
          <div className="card-price">39,00$</div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
