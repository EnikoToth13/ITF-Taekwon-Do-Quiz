import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Study from './pages/Study';
import Quiz from './pages/Quiz';

export default function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column bg-light">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study" element={<Study />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <footer className="bg-white border-top py-3 text-center text-muted">
          <small>ITF Taekwon-Do Study Portal &copy; {new Date().getFullYear()}</small>
        </footer>
      </div>
    </Router>
  );
}