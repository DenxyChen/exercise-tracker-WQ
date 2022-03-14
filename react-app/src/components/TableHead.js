// dependencies
import React from 'react';

export default function TableHead( ) {
    return (
        <thead>
            <tr>
                <th className="text">Name</th>
                <th className="number">Reps</th>
                <th className="number">Weight</th>
                <th className="dropdown">Unit</th>
                <th className="text">Date</th>
                <th> </th>
            </tr>
        </thead>
    );
}


