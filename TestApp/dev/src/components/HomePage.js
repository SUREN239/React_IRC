// src/components/HomePage.js
import React, { useState } from 'react';
import StudentCard from './StudentCard';

const studentData = [
  {
    id: 1,
    name: 'Student 1',
    photo: process.env.PUBLIC_URL + '/assets/img/727822TUCS203-SANJAY R.JPG',
  },
  {
    id: 2,
    name: 'Student 2',
    photo: process.env.PUBLIC_URL + '/url_to_student2_photo.jpg',
  },
];

const HomePage = () => {
  const [presentStudents, setPresentStudents] = useState([]);

  const handleMarkPresent = (studentId) => {
    setPresentStudents((prevPresentStudents) => [...prevPresentStudents, studentId]);
  };

  return (
    <div>
      <h1>Attendance App</h1>
      <div className="student-list">
        {studentData.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onMarkPresent={handleMarkPresent}
          />
        ))}
      </div>
      <h2>Present Students:</h2>
      <ul>
        {presentStudents.map((studentId) => (
          <li key={studentId}>Student {studentId}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
