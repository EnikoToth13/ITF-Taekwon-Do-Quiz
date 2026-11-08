import React, { useState } from 'react';
import { quizData, GupLevel } from '../data/tkdData';
import { HelpCircle, Award, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

export default function Quiz() {
  const [selectedGup, setSelectedGup] = useState(GupLevel.GUP_6); // Default to your rank
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const gupOptions = [
    GupLevel.GUP_10,
    GupLevel.GUP_9,
    GupLevel.GUP_8,
    GupLevel.GUP_7,
    GupLevel.GUP_6,
    GupLevel.GUP_5,
    GupLevel.GUP_4,
    GupLevel.GUP_3,
    GupLevel.GUP_2,
    GupLevel.GUP_1,
  ];

  const getGupRank = (gupString) => {
    if (!gupString) return 99;
    if (gupString.includes("10th")) return 10;
    if (gupString.includes("9th")) return 9;
    if (gupString.includes("8th")) return 8;
    if (gupString.includes("7th")) return 7;
    if (gupString.includes("6th")) return 6;
    if (gupString.includes("5th")) return 5;
    if (gupString.includes("4th")) return 4;
    if (gupString.includes("3rd")) return 3;
    if (gupString.includes("2nd")) return 2;
    if (gupString.includes("1st")) return 1;
    return 99;
  };

  // Filter questions cumulatively up to the selected Gup
  const activeQuestions = quizData.filter((q) => {
    const itemRank = getGupRank(q.gup);
    const selectedRank = getGupRank(selectedGup);
    return itemRank >= selectedRank;
  });

  const handleOptionSelect = (questionId, option) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option,
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="container my-5" style={{ maxWidth: '800px' }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold"><HelpCircle className="text-primary me-2" size={32} /> ITF Theory Quiz</h2>
        <p className="text-muted">Test your knowledge on stances, history, and terminology.</p>
      </div>

      {!quizStarted ? (
        <div className="card shadow-sm border-0 p-4 text-center">
          <h4 className="fw-bold mb-3">Select Your Testing Level</h4>
          <p className="text-muted mb-4">
            The quiz will dynamically load all questions from 10th Gup up to your selected rank.
          </p>
          <div className="mb-4 mx-auto" style={{ maxWidth: '400px' }}>
            <select
              className="form-select form-select-lg"
              value={selectedGup}
              onChange={(e) => setSelectedGup(e.target.value)}
            >
              {gupOptions.map((gup, idx) => (
                <option key={idx} value={gup}>
                  {gup}
                </option>
              ))}
            </select>
          </div>
          <button
            className="btn btn-primary btn-lg px-5 mx-auto"
            onClick={() => setQuizStarted(true)}
            disabled={activeQuestions.length === 0}
          >
            Start Quiz ({activeQuestions.length} Questions Available)
          </button>
          {activeQuestions.length === 0 && (
            <small className="text-danger mt-2">No questions found for this level yet.</small>
          )}
        </div>
      ) : !isSubmitted ? (
        <div className="card shadow-sm border-0">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center py-3">
            <span className="fw-bold">Question {currentIndex + 1} of {activeQuestions.length}</span>
            <span className="badge bg-primary">{activeQuestions[currentIndex].gup}</span>
          </div>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-4">{activeQuestions[currentIndex].question}</h4>
            <div className="d-grid gap-3">
              {activeQuestions[currentIndex].options.map((opt, idx) => {
                const isSelected = selectedAnswers[activeQuestions[currentIndex].id] === opt;
                return (
                  <button
                    key={idx}
                    className={`btn text-start p-3 border ${isSelected ? 'btn-primary text-white' : 'btn-light'}`}
                    onClick={() => handleOptionSelect(activeQuestions[currentIndex].id, opt)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="card-footer bg-white d-flex justify-content-between p-3 border-top-0">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            {currentIndex < activeQuestions.length - 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => setCurrentIndex((prev) => prev + 1)}
              >
                Next
              </button>
            ) : (
              <button
                className="btn btn-success fw-bold px-4"
                onClick={() => setIsSubmitted(true)}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="card shadow-sm border-0 text-center p-5">
          <Award className="text-success mx-auto mb-3" size={64} />
          <h2 className="fw-bold">Quiz Completed!</h2>
          <p className="lead text-muted mt-2">
            You scored <strong className="text-primary">{calculateScore()}</strong> out of <strong className="text-dark">{activeQuestions.length}</strong>
          </p>
          
          <div className="text-start mt-4 mb-4">
            <h5 className="fw-bold mb-3">Review Answers:</h5>
            {activeQuestions.map((q, idx) => {
              const userAns = selectedAnswers[q.id];
              const isCorrect = userAns === q.correct;
              return (
                <div key={idx} className="p-3 mb-2 rounded bg-light border">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    {isCorrect ? <CheckCircle2 className="text-success" size={20} /> : <XCircle className="text-danger" size={20} />}
                    <strong>{q.question}</strong>
                  </div>
                  <small className="d-block text-muted">Your answer: <span className={isCorrect ? "text-success fw-bold" : "text-danger fw-bold"}>{userAns || "No answer provided"}</span></small>
                  {!isCorrect && <small className="d-block text-success">Correct answer: {q.correct}</small>}
                </div>
              );
            })}
          </div>

          <button className="btn btn-primary btn-lg mx-auto" onClick={restartQuiz}>
            <RotateCcw size={18} className="me-2" /> Try Again / Change Rank
          </button>
        </div>
      )}
    </div>
  );
}