// src/components/HabitTracker.js
import React, { useState } from "react";

const HabitTracker = () => {
  const [habit, setHabit] = useState("");
  const [progress, setProgress] = useState([]);

  const handleAddHabit = () => {
    setProgress([...progress, habit]);
    setHabit("");
  };

  return (
    <div>
      <h2>Track Your Habit</h2>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Add a new habit"
      />
      <button onClick={handleAddHabit}>Add Habit</button>

      <ul>
        {progress.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
