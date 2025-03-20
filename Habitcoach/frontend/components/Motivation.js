// src/components/Motivation.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Motivation = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios.get("/api/motivational-quote")
      .then(response => setQuote(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Motivational Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Motivation;
