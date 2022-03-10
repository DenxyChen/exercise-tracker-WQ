// style sheet
import './App.css';

// dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// components
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* Global design features are displayed across the entire site. */}
        <header className="App-header">
          <h1>Exercise Tracker</h1>
        </header>

        <Navigation />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/add-exercise" element={<CreateExercisePage />} />
          <Route path="/edit-exercise/:id" element={<EditExercisePage />} />
        </Routes>

        <footer>
              © 2022 Xiao Yu Chen, modified 03/09/2022
        </footer>

    </BrowserRouter>
    </div>
  );
}

