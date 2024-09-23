// src/pages/CourseDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaUser, FaClock } from 'react-icons/fa';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { FaSignInAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { isLoggedIn, removeToken } from '../utils/auth';
import './CourseDetails.css';

export default function CourseDetails() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedSections, setExpandedSections] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7143/api/Course/${courseId}`)
            .then(response => {
                setCourse(response.data.course);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching course details:', error);
                setIsLoading(false);
            });
    }, [courseId]);

    useEffect(() => {
        axios.get('https://localhost:7143/api/Category')
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
            navigate('/login'); // Redirect to login if not logged in
        } else {
            navigate('/checkout'); // Redirect to checkout if logged in
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
                        <div className="icon"><CiHeart size={24} color="black" /></div>
                        <div className="icon"><SlBasket size={20} color="black" /></div>
                        <div className="icon"><GoBell size={20} color="black" /></div>
                        <div className="icon" onClick={handleLoginLogout}>
                            {isLoggedIn() ? (
                                <FaSignOutAlt size={20} color="black" /> // Show logout icon if logged in
                            ) : (
                                <FaSignInAlt size={20} color="black" /> // Show login icon if not logged in
                            )}
                        </div>
                    </div>
                </div>

                {/* Top Categories Slider with Links */}
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
                            <p>{course.longDescription}</p>
                            <p className="course-rating">
                                <span>{course.ratingsCount}</span>
                                <div className="rating-stars">
                                    <FaStar size={20} color="gold" />
                                    <FaStar size={20} color="gold" />
                                    <FaStar size={20} color="gold" />
                                    <FaStar size={20} color="gold" />
                                    <FaStarHalfAlt size={20} color="gold" />
                                </div>
                            </p>
                            <div className="course-meta">
                                <p>
                                    <FaUser size={13} color="black" /> Created by: {course.createdBy}
                                </p>
                                <p>
                                    <FaClock size={13} color="black" /> Last updated: {course.updatedAt ? new Date(course.updatedAt).toLocaleDateString() : new Date(course.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            <div className='space-div-course-details'></div>
                            <div className="what-youll-learn">
                                <h2>What you'll learn</h2>
                                <ul>
                                    {course.whatYouWillLearn.split('. ').map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='space-div-course-details'></div>
                            <div className="topics">
                                <h2>Explore related topics</h2>
                                <div className="tags">
                                    {course.tags.split(",").map((tag, index) => (
                                        <span key={index} className="tag">
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='space-div-course-details'></div>
                            <div className="course-content-details-1">
                                <h2>Course Content</h2>
                                {course.courseContent?.sections.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="section">
                                        <h3 className='h3-course-details' onClick={() => toggleSection(sectionIndex)} style={{ cursor: 'pointer' }}>
                                            {isSectionOpen(sectionIndex) ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />} {/* Conditional arrow */}
                                            {section.title}
                                        </h3>
                                        {isSectionOpen(sectionIndex) && (
                                            <ul>
                                                {section.lessons.map((lesson, lessonIndex) => (
                                                    <li key={lessonIndex}>
                                                        <span>{lesson.timestamp}</span> - {lesson.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className='space-div-course-details'></div>
                            <div className="topics">
                                <h2>Who this course is for</h2>
                                <ul>
                                    {course.whoThisCourseIsFor.split('. ').map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

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
                    </div>
                ) : (
                    <p>Course not found.</p>
                )}
            </div>
        </div>
    );
}
