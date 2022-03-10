import React from 'react';
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'

export default function EditButton({ _id }) {
    return (
        <Link to={`/edit-exercise/${_id}`}><FaEdit /></Link>
    );
}