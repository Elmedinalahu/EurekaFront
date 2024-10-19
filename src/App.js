import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import Header from './Components/Header.js';
import CourseCard from './Components/CourseCard.js'
import Statistics from './Components/Statistics.js'
import Dashboard from './Components/Dashboard.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<CourseCard />} />
            <Route path="/statistics" element={<Statistics />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
