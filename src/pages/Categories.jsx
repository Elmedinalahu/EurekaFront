import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Added Link
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { FaSignInAlt } from "react-icons/fa";
import './Categories.css';

export default function CategoryPage() {

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [courses, setCourses] = useState([]); // State to store courses
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams(); // Get the category ID from the URL

  useEffect(() => {
    // Fetch all categories for the top slider
    axios.get('https://localhost:7143/api/Category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    if (categoryId) {
      setIsLoading(true); // Start loading when a new category is selected
      setCourses([]); // Clear previous courses
  
      // Fetch the category details
      axios.get(`https://localhost:7143/api/Category/${categoryId}`)
        .then(response => {
          setCategory(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching category details:', error);
          setIsLoading(false);
        });
  
      axios.get(`https://localhost:7143/api/Course/category/${categoryId}`)
        .then(response => {
          setCourses(response.data); // Store courses of the category
        })
        .catch(error => {
          console.error('Error fetching category courses:', error);
        });
    }
  }, [categoryId]);

  const handleSubcategoryClick = (subcategoryId) => {
    // Fetch courses by subcategory when a subcategory is clicked
    axios.get(`https://localhost:7143/api/Course/subcategory/${subcategoryId}`)
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching subcategory courses:', error);
      });
  };

  if (isLoading) {
    return <p>Loading category details...</p>;
  }

  return (
    <div className="body">
      <div className="landing-1">
        <div className="navbar">
          <div className="e">Eureka...</div>
          <div className="nav">
            <span className="course-1">Become an Instructor</span>
          </div>
          <div className="nav-right">
            <div className="icon">
              <CiHeart size={24} color="black" />
            </div>
            <div className="icon">
              <SlBasket size={20} color="black" />
            </div>
            <div className="icon">
              <GoBell size={20} color="black" />
            </div>
            <div className="icon">
              <FaSignInAlt size={20} color="black" />
            </div>
          </div>
        </div>

        {/* Top Categories Slider with Links */}
        <div className="top-categories-nav">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className={`categorie-item ${categoryId === String(category.id) ? 'active-category' : ''}`} // Add active class based on categoryId
            >
              <span className="category-name">{category.name}</span>
            </Link>
          ))}
        </div>

        <div>
          {category ? (
            <>
              <h2 className="category-heading-1">{category.name}</h2>

              {/* Display Subcategories */}
              <div className="subcategory-container">
                {category.subcategories && category.subcategories.length > 0 ? (
                  <div>
                    {category.subcategories.map(sub => (
                      <span key={sub.id} className="subcategory-tag" onClick={() => handleSubcategoryClick(sub.id)}>
                        {sub.name}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p>No subcategories available.</p>
                )}
              </div>

              <br />
              <h2 className="category-heading-1">Courses</h2>

              {/* Display Courses with Images and Links */}
              <div className="courses-container">
                {courses.length > 0 ? (
                  <div className="course-grid">
                    {courses.map(course => (
                      <div key={course.id} className="course-card">
                        <Link to={`/course/${course.id}`} className="course-link">
                          <div className="course-content">
                            {/* Text content on the left */}
                            <div className="course-info">
                              <h3 className="course-titles">{course.name}</h3>
                              <p className="course-description">{course.description}</p>
                              <p className="course-prices">
   {course.isFree ? 'Free Course' : `Price: $${course.price}`}
</p>
                            </div>
                            {/* Image on the right */}
                            <div className="course-image-container">
                              <img src={course.pictureUrl} alt={course.name} className="course-image" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No courses available for this category or subcategory.</p>
                )}
              </div>
            </>
          ) : (
            <p>Category not found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
