import React, { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState([]);

  const handleStudentAdded = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <AddStudent onStudentAdded={handleStudentAdded} />
      <StudentList students={students} setStudents={setStudents} />
    </div>
  );
}

export default App;
