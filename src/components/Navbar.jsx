import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, HelpCircle, Home as HomeIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2 fw-bold" to="/">
          <BookOpen className="text-primary" size={24} />
          <span>ITF Theory</span>
        </NavLink>
        <div className="navbar-nav d-flex flex-row gap-3">
          <NavLink 
            className={({ isActive }) => `nav-link d-flex align-items-center gap-1 ${isActive ? 'active fw-bold' : ''}`} 
            to="/"
          >
            <HomeIcon size={18} /> Home
          </NavLink>
          <NavLink 
            className={({ isActive }) => `nav-link d-flex align-items-center gap-1 ${isActive ? 'active fw-bold' : ''}`} 
            to="/study"
          >
            <BookOpen size={18} /> Study
          </NavLink>
          <NavLink 
            className={({ isActive }) => `nav-link d-flex align-items-center gap-1 ${isActive ? 'active fw-bold' : ''}`} 
            to="/quiz"
          >
            <HelpCircle size={18} /> Quiz
          </NavLink>
        </div>
      </div>
    </nav>
  );
}