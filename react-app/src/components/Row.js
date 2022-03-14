import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function Row({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td className="action-buttons">
                <FaEdit onClick={() => onEdit(exercise)}/>
                <FaTrash onClick={() => onDelete(exercise._id)}/>
            </td>
        </tr>
    );
}
