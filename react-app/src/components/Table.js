// dependencies
import React from 'react';
import {Link} from 'react-router-dom'

// components
import TableHead from './TableHead';
import Row from './Row';


export default function Table({ exercises, onDelete, onEdit }) {
    return (
        <table>
            <TableHead />
            <tbody>
                {exercises.map((exercise, i) => <Row exercise={exercise} onDelete={onDelete} onEdit={onEdit} key={i} />)}
            </tbody>
        </table>
    );
}
