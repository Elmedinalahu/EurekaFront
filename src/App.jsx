import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './index.css';
import F12Main from './F12Main';

import Cart from './pages/Cart';
import Cart1 from './pages/Cart1';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import Discussions from './pages/Discussions';
import Landing from './pages/Landing';
import Landing1 from './pages/Landing1';
import Login from './pages/Login';
import TeachingExperience from './pages/TeachingExperience';
import VideoExperience from './pages/VideoExperience';
import ExistingAudience from './pages/ExistingAudience';
import InstructorCourse from './pages/InstructorCourse';
import CourseCreate from './pages/CourseCreate';
import Performance from './pages/Performance';
import PurchasedCoursesPage from './pages/PurchasedCoursesPage'; // Import the new component
import Signup from './pages/Signup';
import SignupInstructor from './pages/SignupInstructor';
import Categories from './pages/Categories';
import CourseDetails from './pages/CourseDetails';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

// Initialize Stripe
const stripePromise = loadStripe('pk_test_51QBcCpJtrNUkrP9kHXpuhiaIN8PqJHTA3wEKAtpsgnhfaI13tZ7bDMlJ1cFDOabEeEIwoHMxsycGfNIHgltK26wz00usRo0NHG');

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/cart', element: <Cart /> },
  {
    path: '/Checkout',
    element: (
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    ),
  },
  { path: '/Dashboard', element: <PrivateRoute element={<Dashboard />} /> }, // Protect Dashboard route
  { path: '/Discussions', element: <PrivateRoute element={<Discussions />} /> }, // Protect Discussions route
  { path: '/Landing', element: <Landing /> },
  { path: '/Landing1', element: <Landing1 /> },
  { path: '/login', element: <Login /> },
  { path: '/course/:courseId', element: <CourseDetails /> },
  { path: '/category/:categoryId', element: <Categories /> },
  { path: '/student/signup', element: <Signup /> },
  { path: '/instructor/signup', element: <SignupInstructor /> },
  { path: '/teaching/teaching-experience', element: <TeachingExperience /> },
  { path: '/teaching/video-experience', element: <VideoExperience /> },
  { path: '/teaching/existing-audience', element: <ExistingAudience /> },
  { path: '/instructor/courses', element: <InstructorCourse /> },
  { path: '/instructor/create-course', element: <CourseCreate /> },
  { path: '/instructor/performance', element: <Performance /> },
  { path: '/purchased-courses', element: <PurchasedCoursesPage  /> }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
