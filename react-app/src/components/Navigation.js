import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation( ) {
    return (
        <nav class="nav-bar">
            <Link to="/" className="link"> Home</Link>
            <Link to="/add-exercise" className="link"> Add Exercise</Link>
            <Link to="/edit-exercise" className="link"> Edit Exercise</Link>
        </nav>
    );
}
