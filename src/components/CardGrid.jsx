// import React from "react";
// import "./CardGrid.css"; // Import the CSS file
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBook,
//   faUserGraduate,
//   faUser,
//   faBell,
// } from "@fortawesome/free-solid-svg-icons";

// const Grid = ({ image, title, description, buttonText, buttonLink, price }) => {
//   return (
//     <div className="grid-container">
//       <div className="grid-item">
//         <img src={image} alt={title} className="card-image" />
//         <h2 className="card-title">{title}</h2>
//         <p className="card-description">{description}</p>
//         <div className="icon-container">
//           <div className="icon">
//             <FontAwesomeIcon icon={faBook} />
//             <span>Lesson: 2</span>
//           </div>
//           <div className="icon">
//             <FontAwesomeIcon icon={faUserGraduate} />
//             <span>Student: 4</span>
//           </div>
//           <div className="icon">
//             <FontAwesomeIcon icon={faUser} />
//             <span>Beginner</span>
//           </div>
//         </div>
//         <div className="card-footer">
//           <a href={buttonLink} className="card-button">
//             {buttonText}
//           </a>
//           <div className="card-price">39,00$</div>
//         </div>
//       </div>
//       <div className="grid-item">
//         <img src={image} alt={title} className="card-image" />
//         <h2 className="card-title">{title}</h2>
//         <p className="card-description">{description}</p>
//         <div className="icon-container">
//           <div className="icon">
//             <FontAwesomeIcon icon={faBook} />
//             <span>Lesson: 2</span>
//           </div>
//           <div className="icon">
//             <FontAwesomeIcon icon={faUserGraduate} />
//             <span>Student: 4</span>
//           </div>
//           <div className="icon">
//             <FontAwesomeIcon icon={faUser} />
//             <span>Beginner</span>
//           </div>
//         </div>
//         <div className="card-footer">
//           <a href={buttonLink} className="card-button">
//             {buttonText}
//           </a>
//           <div className="card-price">39,00$</div>
//         </div>
//       </div>{" "}
//       <div className="grid-item">
//         <img src={image} alt={title} className="card-image" />
//         <h2 className="card-title">{title}</h2>
//         <p className="card-description">{description}</p>
//         <div className="icon-container">
//           <div className="icon">
//             <FontAwesomeIcon icon={faBook} />
//             <span>Lesson: 2</span>
//           </div>
//           <div className="icon">
//             <FontAwesomeIcon icon={faUserGraduate} />
//             <span>Student: 4</span>
//           </div>
//           <div className="icon">
//             <FontAwesomeIcon icon={faUser} />
//             <span>Beginner</span>
//           </div>
//         </div>
//         <div className="card-footer">
//           <a href={buttonLink} className="card-button">
//             {buttonText}
//           </a>
//           <div className="card-price">39,00$</div>
//         </div>
//       </div>{" "}
//       <div className="grid-item">
//         <img src={image} alt={title} className="card-image" />
//         <h2 className="card-title">{title}</h2>
//         <p className="card-description">{description}</p>
//         <div className="icon-container">
//           <div className="icon">
//             <FontAwesomeIcon icon={faBook} />
//             <span>Lesson: 2</span>
//           </div>
//           <div className="icon">
//             <FontAwesomeIcon icon={faUserGraduate} />
//             <span>Student: 4</span>
//           </div>
//           <div className="icon">
//             <FontAwesomeIcon icon={faUser} />
//             <span>Beginner</span>
//           </div>
//         </div>
//         <div className="card-footer">
//           <a href={buttonLink} className="card-button">
//             {buttonText}
//           </a>
//           <div className="card-price">39,00$</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Grid;


import React, { useEffect, useState } from "react";
import axios from "axios"; // Using Axios to fetch data
import "./CardGrid.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUserGraduate, faUser } from "@fortawesome/free-solid-svg-icons";

const Grid = () => {
  const [courses, setCourses] = useState([]);

  // Fetch the course data from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://localhost:7143/api/Course/List");
        setCourses(response.data); // Update the state with the fetched courses
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="grid-container">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div className="grid-item" key={course.id}>
            <img src={course.pictureUrl} alt={course.name} className="card-image" />
            <h2 className="card-title">{course.name}</h2>
            <p className="card-description">{course.description}</p>
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
              <a href={`/courses/${course.id}`} className="card-button">
                View Course
              </a>
              <div className="card-price">{course.price}$</div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading courses...</p>
      )}
    </div>
  );
};

export default Grid;
