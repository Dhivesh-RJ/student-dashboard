import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import studentData from "../data/studentData";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

function SubjectChart() {
  // Build Pie data for Math
  const mathData = studentData.map((student) => ({
    name: student.name,
    value: student.subjects.Math,
  }));

  return (
    <div>
      <h2>Math Score Distribution</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={mathData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {mathData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default SubjectChart;
