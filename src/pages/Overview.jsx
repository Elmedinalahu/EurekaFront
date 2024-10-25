import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Overview({ data }) {
  return (
    <div className="overview-section">
      <h2>Overview</h2>
      {/* Example metrics */}
      <p>Total Students: {data?.totalStudents}</p>
      <p>Average Rating: {data?.averageRating}</p>
      <p>Completion Rate: {data?.completionRate}%</p>

      {/* Line Chart for Enrollment Over Time */}
      <h3>Enrollment Over Time</h3>
      <LineChart width={600} height={300} data={data?.enrollmentData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="enrollment" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
