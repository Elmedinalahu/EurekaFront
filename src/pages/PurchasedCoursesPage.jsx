import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import './Categories.css';
import { useParams, Link } from 'react-router-dom'; // Added Link
import { isLoggedIn, removeToken, getToken } from '../utils/auth'; // Make sure getToken is defined
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";



export default function PurchasedCoursesPage() {
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams(); // Get the category ID from the URL


    useEffect(() => {
        // Fetch all categories for the top slider
        axios.get('https://api.eurekaelearn.com/api/Category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    

    useEffect(() => {
        const fetchPurchasedCourses = async () => {
            setIsLoading(true); // Start loading
            const token = localStorage.getItem('token'); // Get token from local storage
            const userId = JSON.parse(atob(token.split('.')[1])).nameid; // Extract user ID from token

            try {
                const response = await axios.get(`https://api.eurekaelearn.com/api/Course/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCourses(response.data); // Store purchased courses
            } catch (error) {
                console.error('Error fetching purchased courses:', error);
            } finally {
                setIsLoading(false); // End loading
            }
        };

        fetchPurchasedCourses();
    }, []);
    const handleLoginLogout = () => {
        if (isLoggedIn()) {
            removeToken(); // Log out
            alert('Logged out successfully.');
            navigate('/'); // Redirect to home after logout
        } else {
            navigate('/login'); // Redirect to login page if not logged in
        }
    };

    if (isLoading) {
        return <p>Loading your purchased courses...</p>;
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
                        <div className="icon" onClick={() => navigate('/purchased-courses')}>
                            <CiHeart size={24} color="black" />
                        </div>
                        <div className="icon" onClick={handleLoginLogout}>
                            {isLoggedIn() ? (
                                <FaSignOutAlt size={20} color="black" />
                            ) : (
                                <FaSignInAlt size={20} color="black" />
                            )}
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


                <h2 className="category-heading-1">Your Purchased Courses</h2>

                <div className="courses-container">
                    {courses.length > 0 ? (
                        <div className="course-grid">
                            {courses.map(course => (
                                <div key={course.id} className="course-card">
                                    <Link to={`/course/${course.id}`} className="course-link">
                                        <div className="course-content">
                                            <div className="course-info">
                                                <h3 className="course-titles">{course.name}</h3>
                                                <p className="course-description">{course.description}</p>
                                                <p className="course-prices">
                                                    {course.isFree ? 'Free Course' : `Price: $${course.price}`}
                                                </p>
                                            </div>
                                            <div className="course-image-container">
                                                <img src={course.pictureUrl} alt={course.name} className="course-image" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No purchased courses found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
