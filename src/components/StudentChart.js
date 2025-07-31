import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import studentData from "../data/studentData";

function StudentChart() {
  // Convert data format for chart
  const chartData = studentData.map(student => ({
    name: student.name,
    Math: student.subjects.Math,
    English: student.subjects.English,
    Science: student.subjects.Science,
  }));

  return (
    <div>
      <h2>Subject-wise Performance</h2>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Math" stroke="#8884d8" />
        <Line type="monotone" dataKey="English" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Science" stroke="#ffc658" />
      </LineChart>
    </div>
  );
}

export default StudentChart;
