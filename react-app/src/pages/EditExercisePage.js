import React from 'react';
import Table from '../components/Table';

export default function EditExercisePage({ exercise }) {
    return (
      <article>
        <h2>Edit Exercise Page</h2>
        <Table exercises={[exercise]}/>
      </article>
    );
}

  
