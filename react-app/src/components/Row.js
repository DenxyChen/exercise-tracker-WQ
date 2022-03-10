import React from 'react';
import { FaTrash } from 'react-icons/fa'
import DeleteButton from './DeleteButton';

export default function Row({ exercise, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FaTrash onClick={() => onDelete(exercise._id)} /><DeleteButton _id={exercise._id} onDelete={onDelete} /></td>
        </tr>
    );
}
