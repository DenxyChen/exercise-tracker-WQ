// style sheet
import './App.css';

// dependencies
import { useState, React} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// components
import Navigation from './components/Navigation';

export default function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>

        {/* Global design features are displayed across the entire site. */}
        <header className="App-header">
          <h1>Exercise Tracker</h1>
          <p><em>add, edit, and delete exercises</em></p>
        </header>

        <Navigation />

        <main>
          <Routes>
            <Route path="/" exact element={<HomePage setExerciseToEdit={setExerciseToEdit}/>} />
            <Route path="/add-exercise" element={<CreateExercisePage />} />
            <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit}/>} />
          </Routes>
        </main>

        <footer>
              © 2022 Xiao Yu Chen, modified 03/13/2022
        </footer>

    </BrowserRouter>
    </div>
  );
}

