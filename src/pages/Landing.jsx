import React, { useState, useEffect } from 'react';
import './Landing1.css';
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImQuotesLeft } from "react-icons/im";
import { PiLessThanLight, PiGreaterThanLight } from "react-icons/pi";
import axios from 'axios'; // Import Axios for API requests
import Slider from 'react-slick'; // Import react-slick for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSearch } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import { isLoggedIn, removeToken } from '../utils/auth'; // Assuming these are your auth utilities

export default function Landing() {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0); // State for total courses
  const navigate = useNavigate();

  // Function to handle button click for instructor signup
  const handleButtonClick = () => {
    navigate('/instructor/signup');  // Redirects to the login page
  };

  // Fetch categories on component mount
  useEffect(() => {
    axios.get('https://api.eurekaelearn.com/api/Category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  // Fetch latest courses on component mount
  useEffect(() => {
    axios.get('https://api.eurekaelearn.com/api/Course/latest')
      .then(response => {
        setCourses(response.data); // Set the fetched courses into state
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://api.eurekaelearn.com/api/Course/total')
      .then(response => {
        setTotalCourses(response.data.totalCourses); // Set total courses
        console.log(response.data.totalCourses);
      })
      .catch(error => {
        console.error('Error fetching total courses:', error);
      });
  }, []);

  // Function to handle login/logout
  const handleLoginLogout = () => {
    if (isLoggedIn()) {
      removeToken(); // Log out
      alert('Logged out successfully.');
      navigate('/'); // Redirect to home after logout
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  return (
    <div class="body">
      <div className="landing-1">
        <div className="navbar">
          <div className="e">
            Eureka...
          </div>
          <div className="nav" onClick={() => navigate('/instructor/signup')}>
            <span className="course-1">Become an Instructor</span>
          </div>
          <div className="nav-right">
            <div className="icon" onClick={() => navigate('/purchased-courses')}>
              <CiHeart size={24} color="black" />
            </div>
            <div className="icon" onClick={handleLoginLogout}>
              {isLoggedIn() ? (
                <FaSignOutAlt size={20} color="black" /> // Show logout icon if logged in
              ) : (
                <FaSignInAlt size={20} color="black" /> // Show login icon if not logged in
              )}
            </div>
          </div>
        </div>

        {/* Top Categories Slider */}
        <div className="top-categories-nav">
          {categories.map(category => (
              <Link key={category.id} to={`/category/${category.id}`} className={`categorie-item ${category.active ? 'active' : ''}`}>
                <span className="category-name">{category.name}</span>
              </Link>
          ))}
        </div>
        <div className="hero-section">
      <div className="hero-text">
        <h1>Come teach with us</h1>
        <p>Become an instructor and change lives — including your own</p>
        <button className="get-started-button" onClick={handleButtonClick}>
          Get started
        </button>
      </div>
      <div className="hero-image">
        <img src="src\assets\instructor-removebg-preview.png" alt="Instructor" />
      </div>
    </div>

        <div className="search-section">
          <div className="search-among-58340-courses-and-find-your-favorite-course">
            <span className="search-among-58340-courses-and-find-your-favorite-course-sub">Search among</span>
            <span className="search-among-58340-courses-and-find-your-favorite-course-sub-1"> {totalCourses} </span> 
            <span className='search-among-58340-courses-and-find-your-favorite-course-sub'>courses and find your favorite course</span>
          </div>
          <div className="container">
            <div className="container-7">
              <div className="search-anything">
                Search anything
              </div>

              <div className="search-icon">
                <FaSearch size={24} color="black" />
              </div>
            </div>
            <div className="or-view-the-following-courses">
              Or view the following courses...
            </div>
          </div>
        </div>

        <div className="course-2">
          <div className="section-3">
            <div className="section-3">
              <div className="rectangle-2"></div>
              <span className="title-16">Course</span>
            </div>
            <div className="tab-categories">
              <div className="tab">
                <span className="label-text-10">all course</span>
              </div>
              <div className="tab">
                <span className="label-text-11">Design</span>
              </div>
              <div className="tab">
                <span className="label-text-12">Development</span>
              </div>
              <div className="tab">
                <span className="label-text-13">Photography</span>
              </div>
              <div className="tab">
                <span className="label-text-14">Music</span>
              </div>
            </div>
          </div>
          <div className="container-courses">
  {courses.map(course => (
    <div key={course.id} className="card">
      <div className="imgacademy-10">
        <img  src={course.pictureUrl} alt={course.name} className="img-course-image" /> {/* Displaying the course image */}
      </div>
      <div className="title">
        <span className="title-1">{course.name}</span>
      </div>
      <div className="actions">
        <div className="button">
          <span className="label-text-2">Start course</span>
          <div className="v-6-iconfree-2"><MdArrowForward size={20} color="white" /></div>
        </div>
        <div className="container-course-price">${course.price}</div>
      </div>
    </div>
  ))}
</div>

        </div>
        <div className='space-div'></div>
        <div className="instructor-section">
          <div className="image-17">
          </div>
          <div className="left-instructors">
            <div className="container-6">
              <p className="become-an-instructor">Become an <span className="become-an-instructor-1-sub-0">Instructor</span></p>
              <span className="supporting-text-1">
                Instructors from around the world teach millions of learners on Eureka. We provide the tools and skills to teach what you love.
              </span>
              <div className="button-8">
              <button className="label-text-15" onClick={handleButtonClick}>
                  Start teaching today
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className='space-div'></div>
        <div className='space-div2'></div>

        <div className="newsletters">
          <img className="background-newsletter" src="http://res.cloudinary.com/dkulnjbr2/image/upload/v1729921594/xqtamfcmpk5fuilsztq8.png" />
          <p className="find-out-about-the-latest-courses-with-eurka">Find out about the latest courses with <span>EURKA</span></p>
          <div className="newsletters-1">
            <div className="email-address">
              <p>Email address...  </p>
              <div className="button"><span className="label-text-17">SUBMIT</span>
              </div></div>

          </div>
        </div>
        <div className='space-div'></div>
        <div className='space-div2'></div>
        <div className="testimonials-section">
          <div className="title-what-thy-say">
            <ImQuotesLeft size={70} color="orange" />
            <span className="what-they-say-about-eureka">
              What They Say About<br />
              EUREKA
            </span>
            <span className="more-than-3000-users-have-been-helped-by-world-online-course">
              More than 3000 users have been helped by World Online Course.
            </span>
          </div>
          <div className="what-they-say-card">
            <div className="container-17">
              <span className="what-they-say">
                What They Say
              </span>
              {/* <div className="group-12">
                <div className="ellipse-1">
                </div>
                <div className="ellipse-2">
                </div>
                <div className="ellipse-3">
                </div>
                <div className="ellipse-4">
                </div>
                <div className="ellipse-5">
                </div>
              </div> */}

            </div>
            <div className="supporting-text-3">
    <em>"Eureka is a fantastic platform with a wide range of courses and expert instructors. I love the flexibility of learning at my own pace, and the community support has been invaluable. Thanks to Eureka, I've gained new skills and even secured a new job! Highly recommend for anyone wanting to grow their skills."</em>
</div>

            <div className="container-4">
              <div className="container-9">
              </div>
              {/* <div className="group-18">
                <PiLessThanLight size={24} color="black" />
              </div>
              <div className="group-18">
                <PiGreaterThanLight size={24} color="black" />
              </div> */}
            </div>
          </div>
        </div>

        <div className='space-div'></div>
        <div className="footer">
          <div className="top-footer">
            <div className="explanation">
            <span className="supporting-text">
              Eureka Inc.<br />
              Empowering learners worldwide, Eureka is a leading online learning platform dedicated to providing quality, accessible education in a wide range of fields. Our mission is to inspire growth and support personal and professional development for students, professionals, and enthusiasts alike. With a diverse catalog of courses and expert instructors, Eureka offers flexibility and the tools needed to succeed.<br /><br />
              Contact us: support@eureka.com | (123) 456-7890<br />
              Follow us on social media for updates, tips, and inspiration!
            </span>

            </div>
            <div className="eureka">
              Eureka...
            </div>
          </div>
          <div className="bottom-footer">
            <span className="privacy-policy-terms-conditions">
              privacy policy | terms &amp; conditions
            </span>
            <span className="all-copyrightc-2024-reserved">
              all copyright (c) 2024 reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}