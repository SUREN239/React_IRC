// src/components/StudentCard.js
import React, { useState } from 'react';
import '../assets/css/StudentCard.css';

const StudentCard = ({ student, onMarkPresent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMarkPresent = () => {
    onMarkPresent(student.id);
  };

  return (
    <div
      className={`student-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
      <div className="card front">
        <img src={student.photo} alt={student.name} className="student-photo" />
        <p>{student.name}</p>
      </div>
      <div className="card back">
        <p>Mark Present?</p>
        <button onClick={handleMarkPresent}>Yes</button>
      </div>
    </div>
  );
};

export default StudentCard;
