import "./Cart.css";
import React from "react";
import myImage from "../assets/KJOOO.jpg";
import Grid from "../components/CardGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUserGraduate,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  return (
    <div className="cart">
      <div className="menu">
        <div className="rectangle-5"></div>
        <div className="container-15">
          <div className="e">E.</div>
          <img className="vector-7" src="/assets/images/Home.png" alt="Home" />
          <img className="vector-13" src="/assets/images/Hat.png" alt="Hat" />
          <div className="group-6">
            <div className="group">
              <img
                className="vector-11"
                src="/assets/images/Profile.png"
                alt="Profile"
              />
            </div>
          </div>
          <div className="group-3">
            <img
              className="vector-10"
              src="/assets/images/Message.png"
              alt="Message"
            />
          </div>
          <img
            className="group-2"
            src="/assets/images/Settings.png"
            alt="Settings"
          />
          <div className="group-7">
            <img
              className="vector-14"
              src="/assets/images/Logout.png"
              alt="Logout"
            />
          </div>
        </div>
      </div>
      <div className="container-17">
        <div className="container-2">
          <div className="header-with-search">
            <div className="header">
              <span className="shopping-cart">Shopping Cart</span>
            </div>
            <div className="right-section">
              <div className="search-bar-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
              </div>
              <div className="notification-icon">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className="user-avatar">
                <img src="/assets/images/user-avatar-male-5" alt="User" />
              </div>
            </div>
          </div>

          {/* New Section with Two Parts */}
          <div className="two-section-container">
            <div className="header-container">
              <p className="cart-label">1 Course in Cart</p>
              <div className="divider-line"></div>
            </div>
            <div className="two-section-content">
              <div className="two-section-container-left-section">
                <div className="image-container">
                  <img
                    src={myImage}
                    alt="Description"
                    className="section-image"
                  />
                </div>

                {/* New Container for Title, By Text, Remove, and Icons */}
                <div className="text-info-container">
                  <div className="title-price-container">
                    <h2 className="section-title">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                  </div>
                  <div className="by-remove-container">
                    <p className="by-text">By Erblina Zhegrova</p>
                  </div>
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
                </div>

                {/* New Container for Price, Remove, and Save for Later */}
                <div className="price-remove-container">
                  <span className="course-price">$99.99</span>{" "}
                  {/* Price of the course */}
                  <span
                    className="remove-text"
                    style={{ display: "block", marginTop: "10px" }}
                  >
                    Remove
                  </span>
                  <span
                    className="save-text"
                    style={{ display: "block", marginTop: "5px" }}
                  >
                    Save for later
                  </span>
                </div>
              </div>
              <div className="two-section-container-right-section">
                <div className="total-section">
                  <p className="total-text">Total:</p>
                  <p className="total-price">$99.99</p>
                </div>
                <div className="checkout-section">
                  <input
                    type="button"
                    value="Checkout"
                    className="checkout-button"
                  />
                  <hr className="custom-line" />
                  <h3 className="promotions-title">Promotions</h3>
                  <div className="coupon-container">
                    <input
                      type="text"
                      className="coupon-input"
                      placeholder="Enter Coupon"
                    />
                    <button className="apply-button">Apply</button>
                  </div>
                  <p className="discount-text">20% off discount</p>
                </div>
              </div>
            </div>
          </div>

          <div className="you-might-also-like">
            <h3 className="you-might-also-like-title">You might also like</h3>
          </div>
          <div>
            <Grid
              image="src\assets\KJOOO.jpg"
              title="Card Title"
              description="This is a description of the card."
              buttonText="Add to Cart"
              buttonLink="/item-1"
              price="39,00$"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
