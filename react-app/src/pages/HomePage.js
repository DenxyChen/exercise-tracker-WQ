import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table.js';

export default function HomePage() {
  const [exerciseData, setExerciseData] = useState([]);
  let navigate = useNavigate();

  const loadExerciseData = async () => {
    await fetch('/exercises')
    .then(res => res.json())
    .then(data => setExerciseData(data));
  }

  const onDelete = async _id => {
    const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
    if (response.status === 204) {
      setExerciseData(exerciseData.filter(e => e._id !== _id));
    } else {
	      console.error(`Failed to delete exercise with id = ${_id}, status code = ${response.status}`);
    }
  }

  const onAdd = async () => {
    navigate("/add-exercise");
  }

  useEffect(() => {
    loadExerciseData();
  }, [exerciseData]);

  return (
    <article>
      <h2>Home Page</h2>
      <Table exercises={exerciseData} onDelete={onDelete}/>
      <button onClick={onAdd}>Add</button>
    </article>
  );
}


  
