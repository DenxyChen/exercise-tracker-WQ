// dependencies
import React from 'react';

// components
import TableHead from './TableHead';
import Row from './Row';


export default function Table({ exercises, onDelete }) {
    return (
        <table>
            <TableHead />
            <tbody>
                {exercises.map((exercise, i) => <Row exercise={exercise} onDelete={onDelete} key={i} />)}
            </tbody>
        </table>
    );
}
