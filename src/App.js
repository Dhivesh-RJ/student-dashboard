import React from "react";
import StudentChart from "./components/StudentChart";
import SubjectChart from "./components/SubjectChart";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Dashboard</h1>
      <StudentChart />
      <SubjectChart />
    </div>
  );
}

export default App;
