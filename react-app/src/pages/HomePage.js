import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table.js';

export default function HomePage({ setExerciseToEdit }) {
  const [exerciseData, setExerciseData] = useState([]);
  const navigate = useNavigate();

  const loadExerciseData = async () => {
    await fetch('/exercises')
    .then(res => res.json())
    .then(data => setExerciseData(data));
  }

  const onDelete = async (_id) => {
    const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
    if (response.status === 204) {
      setExerciseData(exerciseData.filter(exercise => exercise._id !== _id));
    } else {
	      alert(`Failed to delete exercise with id = ${_id}, status code = ${response.status}`);
    }
  }

  const onAdd = async () => {
    navigate("/add-exercise");
  }

  const onEdit = async exercise => {
    setExerciseToEdit(exercise);
    navigate("/edit-exercise");
  }

  useEffect(() => {
    loadExerciseData();
  }, []);

  return (
    <article>
      <h2>Home Page</h2>
      <Table exercises={exerciseData} onDelete={onDelete} onEdit={onEdit}/>
      <button onClick={onAdd}>Add</button>
    </article>
  );
}


  
