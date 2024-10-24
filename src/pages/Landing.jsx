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
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://localhost:7143/api/Category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
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
            <div className="icon" onClick={() => navigate('/wishlist')}>
              <CiHeart size={24} color="black" />
            </div>
            <div className="icon" onClick={() => navigate('/cart')}>
              <SlBasket size={20} color="black" />
            </div>
            <div className="icon" onClick={() => navigate('/notifications')}>
              <GoBell size={20} color="black" />
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

        <div className="rectangle-46">
        </div>

        <div className="search-section">
          <div className="search-among-58340-courses-and-find-your-favorite-course">
            <span className="search-among-58340-courses-and-find-your-favorite-course-sub">Search among</span>
            <span className="search-among-58340-courses-and-find-your-favorite-course-sub-1"> 58340 </span>
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
            <div className="card">
              <div className="imgacademy-10">
                <div className="container-10"></div>
              </div>
              <div className="title">
                <span className="title-1">Learn Figma - UI/UX Design Essential Training</span>
              </div>
              <div className="actions">
                <div className="button">
                  <span className="label-text-2">Start course</span>
                  <div className="v-6-iconfree-2"><MdArrowForward size={20} color="white" /></div>
                </div>
                <div className="container-course-price">$25.50</div>
              </div>
            </div>
            <div className="card">
              <div className="imgacademy-10">
                <div className="container-10"></div>
              </div>
              <div className="title">
                <span className="title-1">Learn Figma - UI/UX Design Essential Training</span>
              </div>
              <div className="actions">
                <div className="button">
                  <span className="label-text-2">Start course</span>
                  <div className="v-6-iconfree-2"><MdArrowForward size={20} color="white" /></div>
                </div>
                <div className="container-course-price">$25.50</div>
              </div>
            </div>
            <div className="card">
              <div className="imgacademy-10">
                <div className="container-10"></div>
              </div>
              <div className="title">
                <span className="title-1">Learn Figma - UI/UX Design Essential Training</span>
              </div>
              <div className="actions">
                <div className="button">
                  <span className="label-text-2">Start course</span>
                  <div className="v-6-iconfree-2"><MdArrowForward size={20} color="white" /></div>
                </div>
                <div className="container-course-price">$25.50</div>
              </div>
            </div>
            <div className="card">
              <div className="imgacademy-10">
                <div className="container-10"></div>
              </div>
              <div className="title">
                <span className="title-1">Learn Figma - UI/UX Design Essential Training</span>
              </div>
              <div className="actions">
                <div className="button">
                  <span className="label-text-2">Start course</span>
                  <div className="v-6-iconfree-2"><MdArrowForward size={20} color="white" /></div>
                </div>
                <div className="container-course-price">$25.50</div>
              </div>
            </div>
            <div className="card">
              <div className="imgacademy-10">
                <div className="container-10"></div>
              </div>
              <div className="title">
                <span className="title-1">Learn Figma - UI/UX Design Essential Training</span>
              </div>
              <div className="actions">
                <div className="button">
                  <span className="label-text-2">Start course</span>
                  <div className="v-6-iconfree-2"><MdArrowForward size={20} color="white" /></div>
                </div>
                <div className="container-course-price">$25.50</div>
              </div>
            </div>
            <div className="card">
              <div className="imgacademy-10">
                <div className="container-10"></div>
              </div>
              <div className="title">
                <span className="title-1">Learn Figma - UI/UX Design Essential Training</span>
              </div>
              <div className="actions">
                <div className="button">
                  <span className="label-text-2">Start course</span>
                  <div className="v-6-iconfree-2"><MdArrowForward size={20} color="white" /></div>
                </div>
                <div className="container-course-price">$25.50</div>
              </div>
            </div>
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
                <span className="label-text-15">
                  Start teaching today
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='space-div'></div>
        <div className="newsletters">
          <img className="background-newsletter" src="/assets/images/Picture2.png" />
          <p className="find-out-about-the-latest-courses-with-eurka">Find out about the latest courses with <span>EURKA</span></p>
          <div className="newsletters-1">
            <div className="email-address">
              <p>Email address...  </p>
              <div className="button"><span className="label-text-17">SUBMIT</span>
              </div></div>

          </div>
        </div>
        <div className='space-div'></div>

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
              <div className="group-12">
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
              </div>

            </div>
            <div className="supporting-text-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta
            </div>
            <div className="container-4">
              <div className="container-9">
              </div>
              <div className="group-18">
                <PiLessThanLight size={24} color="black" />
              </div>
              <div className="group-18">
                <PiGreaterThanLight size={24} color="black" />
              </div>
            </div>
          </div>
        </div>

        <div className='space-div'></div>
        <div className="footer">
          <div className="top-footer">
            <div className="explanation">
              <span className="supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium
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
        <div className='space-div'></div>

      </div>
    </div>
  )
}