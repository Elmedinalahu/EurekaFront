import './Cart.css'
import React, { useState } from 'react';
import { FaHome, FaShoppingCart, FaUser, FaCog } from 'react-icons/fa';

export default function Cart() {
  return (
    <div className="cart">
      <div className="menu">
        <div className="rectangle-5">
        </div>
        <div className="container-15">
          <div className="e">
          E.
          </div>
          <img className="vector-7" src="/assets/images/Home.png" />
          <img className="vector-13"  src="/assets/images/Hat.png" />
          <div className="group-6">
            <div className="group">
              <img className="vector-11" src="assets\images\Profile.png" />
            </div>
            {/* <div className="group-1">
              <img className="vector-12" src="assets\images\Message.png" />
            </div> */}
          </div>
          <div className="group-3">
            <img className="vector-10"  src="assets\images\Message.png"/>
          </div>
          <img className="group-2" src="assets\images\Settings.png"  />
          <div className="group-7">
            <img className="vector-14" src="assets\images\Logout.png"/>
          </div>
        </div>
      </div>
      <div className="container-17">
        <div className="container-2">
          <div className="header">
            <span className="shopping-cart">
            Shopping Cart
            </span>
          </div>
          <div className="navigation">
            <div className="search-bar">
              <div className="group-35">
                <img className="vector-6" src="assets/vectors/Unknown" />
              </div>
              <div className="search-bar-1">
                <div className="group-351">
                  <img className="vector-21" src="assets/vectors/Unknown" />
                </div>
              </div>
            </div>
            <div className="notification">
              <img className="group-34" src="assets/vectors/Unknown" />
              <div className="container-1">
                <div className="ellipse-4">
                </div>
              </div>
              <span className="container">
              1
              </span>
              <div className="notification-1">
                <img className="group-341" src="assets/vectors/Unknown" />
                <div className="container-23">
                  <div className="ellipse-41">
                  </div>
                </div>
                <span className="container-8">
                1
                </span>
              </div>
            </div>
            <div className="profile-picture">
              <div className="container-5">
                <div className="mask-group">
                  <div className="image-16">
                  </div>
                  <div className="mask-group-1">
                    <div className="mask-group-2">
                      <div className="image-161">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-38">
                  <img className="vector" src="assets/vectors/Unknown" />
                </div>
              </div>
              <div className="group-381">
                <img className="vector-15" src="assets/vectors/Unknown" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-8">
          <span className="course-in-cart">
          1 Course in Cart
          </span>
          <span className="total">
          Total:
          </span>
        </div>
        <div className="line-145">
        </div>
        <div className="container-12">
          <div className="my-course">
            <div className="imgacademy-15">
              <div className="container-16">
              </div>
            </div>
            <div className="container-18">
              <div className="ionic-react-mobile-development-with-ionic-5">
              Ionic React: Mobile Development with Ionic 5...
              </div>
              <div className="by-aleandro-vela">
              By Aleandro Vela
              </div>
              <div className="information-4">
                <div className="info-product-12">
                  <div className="v-6-iconfree-12">
                    <span className="icon-16">
                    
                    </span>
                  </div>
                  <div className="lesson-612">
                  Lesson : 6
                  </div>
                </div>
                <div className="info-product-13">
                  <div className="v-6-iconfree-13">
                    <span className="icon-17">
                    
                    </span>
                  </div>
                  <div className="lesson-613">
                  student : 18
                  </div>
                </div>
                <div className="info-product-14">
                  <div className="v-6-iconfree-14">
                    <span className="icon-18">
                    
                    </span>
                  </div>
                  <div className="lesson-614">
                  Beginner
                  </div>
                </div>
              </div>
            </div>
            <div className="score-4">
              <div className="container-10">
                <span className="container-17">
                5
                </span>
              </div>
              <span className="icon-19">
              
              </span>
            </div>
          </div>
          <div className="container">
            <div className="container-7">
            €19.99
            </div>
            <div className="remove">
            Remove
            </div>
            <span className="save-for-later">
            Save for later
            </span>
          </div>
          <div className="container-11">
            <div className="container-5">
            €19.99
            </div>
            <div className="container-20">
              <div className="rectangle-24">
              </div>
              <div className="rectangle-25">
              </div>
              <span className="checkout">
              Checkout
              </span>
            </div>
          </div>
        </div>
        <div className="line-146">
        </div>
        <div className="promotions">
        Promotions
        </div>
        <div className="group-651">
          <div className="container-22">
            <div className="enter-coupon">
            Enter Coupon
            </div>
            <div className="group-66">
              <span className="label-text-4">
              Apply
              </span>
            </div>
          </div>
          <span className="off-discount">
          20% off discount
          </span>
        </div>
        <div className="courses-section">
          <span className="you-might-also-like">
          You might also like
          </span>
        </div>
        <div className="container-6">
          <div className="card">
            <div className="imgacademy-10">
              <div className="container-9">
              </div>
            </div>
            <div className="learn-figma-ui-ux-design-essential-training">
            Learn Figma - UI/UX Design Essential Training
            </div>
            <div className="skill-sprints-inc-alejandro-velazquez">
            SkillSprints Inc., Alejandro Velazquez
            </div>
            <div className="information">
              <div className="info-product">
                <div className="v-6-iconfree">
                  <span className="icon-1">
                  
                  </span>
                </div>
                <div className="lesson-6">
                Lesson : 6
                </div>
              </div>
              <div className="info-product-1">
                <div className="v-6-iconfree-1">
                  <span className="icon-2">
                  
                  </span>
                </div>
                <div className="lesson-61">
                student : 18
                </div>
              </div>
              <div className="info-product-2">
                <div className="v-6-iconfree-2">
                  <span className="icon-3">
                  
                  </span>
                </div>
                <div className="lesson-62">
                Beginner
                </div>
              </div>
            </div>
            <div className="container-3">
              <div className="button">
                <span className="label-text">
                Add to cart
                </span>
              </div>
              <div className="container-1">
              €39.20
              </div>
              <div className="score">
                <div className="container-7">
                  <span className="container-10">
                  5
                  </span>
                </div>
                <span className="icon">
                
                </span>
              </div>
            </div>
          </div>
          <div className="card-3">
            <div className="imgacademy-16">
              <div className="container-14">
              </div>
            </div>
            <div className="sports-management-the-essentials-course">
            Sports Management: The Essentials Course
            </div>
            <div className="skill-sprints-inc-alejandro-mik">
            SkillSprints Inc., Alejandro Mik
            </div>
            <div className="information-3">
              <div className="info-product-9">
                <div className="v-6-iconfree-9">
                  <span className="icon-12">
                  
                  </span>
                </div>
                <div className="lesson-69">
                Lesson : 6
                </div>
              </div>
              <div className="info-product-10">
                <div className="v-6-iconfree-10">
                  <span className="icon-13">
                  
                  </span>
                </div>
                <div className="lesson-610">
                student : 18
                </div>
              </div>
              <div className="info-product-11">
                <div className="v-6-iconfree-11">
                  <span className="icon-14">
                  
                  </span>
                </div>
                <div className="lesson-611">
                Beginner
                </div>
              </div>
            </div>
            <div className="container-16">
              <div className="button-3">
                <span className="label-text-3">
                Add to cart
                </span>
              </div>
              <div className="container-9">
                <div className="container-6">
                €19.10
                </div>
                <div className="score-3">
                  <img className="ellipse-42" src="assets/vectors/Unknown" />
                  <div className="container-19">
                    <span className="container-15">
                    1
                    </span>
                  </div>
                  <span className="icon-15">
                  
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-1">
            <div className="imgacademy-04">
              <div className="container-12">
              </div>
            </div>
            <div className="python-for-beginners-learn-programming-from-scratch">
            Python for Beginners - Learn Programming from scratch
            </div>
            <div className="skill-sprints-inc-alejandro-velazquez-1">
            SkillSprints Inc., Alejandro Velazquez
            </div>
            <div className="information-1">
              <div className="info-product-3">
                <div className="v-6-iconfree-3">
                  <span className="icon-5">
                  
                  </span>
                </div>
                <div className="lesson-63">
                Lesson : 6
                </div>
              </div>
              <div className="info-product-4">
                <div className="v-6-iconfree-4">
                  <span className="icon-6">
                  
                  </span>
                </div>
                <div className="lesson-64">
                student : 18
                </div>
              </div>
              <div className="info-product-5">
                <div className="v-6-iconfree-5">
                  <span className="icon-7">
                  
                  </span>
                </div>
                <div className="lesson-65">
                Beginner
                </div>
              </div>
            </div>
            <div className="container-4">
              <div className="button-1">
                <span className="label-text-1">
                Add to cart
                </span>
              </div>
              <div className="container-2">
              €55.50
              </div>
              <div className="score-1">
                <div className="container-24">
                  <span className="container-11">
                  3
                  </span>
                </div>
                <span className="icon-4">
                
                </span>
              </div>
            </div>
          </div>
          <div className="card-2">
            <div className="container-4">
            </div>
            <div className="mobile-app-development-with-flutter-darti-os-and-android">
            Mobile App Development with Flutter &amp; Dart (iOS and Android)
            </div>
            <div className="skill-sprints-inc-alejandro-velazquez-2">
            SkillSprints Inc., Alejandro Velazquez
            </div>
            <div className="information-2">
              <div className="info-product-6">
                <div className="v-6-iconfree-6">
                  <span className="icon-8">
                  
                  </span>
                </div>
                <div className="lesson-66">
                Lesson : 6
                </div>
              </div>
              <div className="info-product-7">
                <div className="v-6-iconfree-7">
                  <span className="icon-9">
                  
                  </span>
                </div>
                <div className="lesson-67">
                student : 18
                </div>
              </div>
              <div className="info-product-8">
                <div className="v-6-iconfree-8">
                  <span className="icon-10">
                  
                  </span>
                </div>
                <div className="lesson-68">
                Beginner
                </div>
              </div>
            </div>
            <div className="container-13">
              <div className="button-2">
                <span className="label-text-2">
                Add to cart
                </span>
              </div>
              <div className="container-21">
                <div className="container-3">
                €41.20
                </div>
                <div className="score-2">
                  <img className="ellipse-52" src="assets/vectors/Unknown" />
                  <div className="container-14">
                    <span className="container-13">
                    2
                    </span>
                  </div>
                  <span className="icon-11">
                  
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}