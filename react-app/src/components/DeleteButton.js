import React from 'react';
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'

export default function DeleteButton({ _id, onDelete }) {
    return (
        <Link to='/'><FaTrash onClick={() => onDelete(_id)} /></Link>
    );
}