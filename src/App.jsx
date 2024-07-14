import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import Signup from './pages/Signup';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Cart', element: <Cart /> },
{ path: '/Cart1', element: <Cart1 /> },
{ path: '/Checkout', element: <Checkout /> },
{ path: '/Dashboard', element: <Dashboard /> },
{ path: '/Discussions', element: <Discussions /> },
{ path: '/Landing', element: <Landing /> },
{ path: '/Landing1', element: <Landing1 /> },
{ path: '/Login', element: <Login /> },
{ path: '/Signup', element: <Signup /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}