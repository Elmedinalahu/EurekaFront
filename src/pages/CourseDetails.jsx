// CourseDetails.js

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaUser, FaClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { isLoggedIn, removeToken, getToken } from '../utils/auth'; // Make sure getToken is defined
import './CourseDetails.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { jwtDecode } from 'jwt-decode';


export default function CourseDetails() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedSections, setExpandedSections] = useState([]);

    useEffect(() => {
        axios.get(`https://api.eurekaelearn.com/api/Course/${courseId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`, // Ensure token is used for API request
            },
        })
            .then(response => {
                setCourse(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching course details:', error);
                setIsLoading(false);
            });
    }, [courseId]);

    useEffect(() => {
        axios.get('https://api.eurekaelearn.com/api/Category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const toggleSection = (sectionIndex) => {
        if (expandedSections.includes(sectionIndex)) {
            setExpandedSections(expandedSections.filter(index => index !== sectionIndex));
        } else {
            setExpandedSections([...expandedSections, sectionIndex]);
        }
    };

    const isSectionOpen = (sectionIndex) => {
        return expandedSections.includes(sectionIndex);
    };

    const handleLoginLogout = () => {
        if (isLoggedIn()) {
            removeToken(); // Log out
            alert('Logged out successfully.');
            navigate('/'); // Redirect to home after logout
        } else {
            navigate('/login'); // Redirect to login page if not logged in
        }
    };

    const handleBuyNow = () => {
        if (!isLoggedIn()) {
            navigate('/login', { state: { from: '/checkout' } });
        } else {
            const token = getToken();
            const email = jwtDecode(token).email; // Assuming your token structure
            const { id, price, name, instructor, pictureUrl } = course; // Extract course data

            // Pass course data through location state
            navigate('/checkout', { state: { courseData: { courseId: id, email, price, name, instructor, pictureUrl } } });
        }
    };

    if (isLoading) {
        return <p>Loading course details...</p>;
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

                <div className="top-categories-nav">
                    {categories.map(category => (
                        <Link key={category.id} to={`/category/${category.id}`} className={`categorie-item`}>
                            <span className="category-name">{category.name}</span>
                        </Link>
                    ))}
                </div>

                {course ? (
                    <div className="course-details">
                        <div className="course-info-details">
                            <h1 className='h1-course-details'>{course.name}</h1>
                            <p className='p-description-details'>{course.description}</p>
                            {course.isFree && ( // Check if course is free
                                <div className="free-course-content">
                                    <div className='test-div-video'>
                                        <video className='test-video' controls>
                                            <source src={course.videoUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            )}

                            <div className="course-info-course-details">
                                {/* Course Rating */}
                                <div className="course-rating">
                                    <span className='test-review'>Review</span>
                                    <div className="rating-stars">
                                        {[...Array(5)].map((_, index) => (
                                            index < Math.floor(course.ratings.averageRating)
                                                ? <FaStar key={index} size={20} color="gold" />
                                                : <FaStarHalfAlt key={index} size={20} color="gold" />
                                        ))}
                                    </div>
                                </div>

                                {/* Created By */}
                                <div className="course-meta">
                                    <p className='test-review'>Instructor</p>
                                    <p>Instructor Name</p>
                                </div>

                                {/* Last Updated */}
                                <div className="course-meta">
                                    <p className='test-review'>Updated on:</p>
                                    <p>{new Date().toLocaleDateString()}</p>
                                </div>
                            </div>


                            <div className='space-div-course-details'></div>



                            <h2 className='title-course-details'>Course Overview</h2>
                            <p>{course.longDescription}</p>


                            <hr className='hr-breaker'></hr>
                            {/* Course Tags */}
                            <div className="topics">
                                <h2>Tags</h2>
                                <div className="tags">
                                    {course.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <hr className='hr-breaker'></hr>

                            {/* What You'll Learn */}
                            <div className="what-youll-learn">
                                <h2>What you'll learn</h2>
                                <ul className='ul-list-coursee'>
                                    {course.whatYouWillLearn.map((item, index) => (
                                        <li className='list-what' key={index}>
                                            <IoIosCheckmarkCircleOutline style={{ marginRight: '8px', color: '#000000' }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <hr className='hr-breaker'></hr>
                            {/* Who This Course Is For */}
                            <div className="topics">
                                <h2>Who this course is for</h2>
                                <ul>
                                    {course.whoThisCourseIsFor.map((item, index) => (
                                        <li className='list-what' key={index}>
                                            <IoIosCheckmarkCircleOutline style={{ marginRight: '8px', color: '#000000' }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <hr className='hr-breaker'></hr>


                            {/* Course Content */}
                            <div className="course-content-details-1">
                                <h2>Course Content</h2>
                                {course.courseContent.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="section">
                                        <h3 className='h3-course-details' onClick={() => toggleSection(sectionIndex)} style={{ cursor: 'pointer' }}>
                                            {isSectionOpen(sectionIndex) ? <FaChevronUp className='favicon' size={16} /> : <FaChevronDown className='favicon' size={16} />}
                                            {section.title}
                                        </h3>
                                        {isSectionOpen(sectionIndex) && (
                                            <ul>
                                                {section.lessons.map((lesson, lessonIndex) => (
                                                    <li className='test-lesson' key={lessonIndex}>
                                                        {lesson.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className='space-div-course-details'></div>


                        </div>

                        {/* Conditionally render this div only if the course is not free */}
                        {!course.isFree && (
                            <div className="course-image-details-price">
                                <div className="course-nested">
                                    <div className="course-image-details">
                                        <img src={course.pictureUrl} alt={course.name} />
                                    </div>
                                    <div className="course-buttons">
                                        <p className="course-price-details">€{course.price}</p>
                                        <button className="add-to-cart">Add to Cart</button>
                                        <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                                    </div>
                                    <div className='course-include'>
                                        <p>This course includes:</p>
                                        <ul>
                                            <li>Access on mobile and TV</li>
                                            <li>Full lifetime access</li>
                                            <li>Certificate of completion</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Course not found.</p>
                )}
            </div>
        </div>
    );
}
