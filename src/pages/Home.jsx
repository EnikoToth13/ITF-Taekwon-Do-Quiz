import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container my-5 text-center">
      <h1 className="display-4 fw-bold">ITF Taekwon-Do Theory & Vocabulary</h1>
      <p className="lead mt-3">
        Learn and test your knowledge of ITF Taekwon-Do theory and vocabulary with our interactive study and quiz platform.
      </p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/study" className="btn btn-primary btn-lg">Start Studying</Link>
        <Link to="/quiz" className="btn btn-outline-secondary btn-lg">Take a Quiz</Link>
      </div>
    </div>
  );
}