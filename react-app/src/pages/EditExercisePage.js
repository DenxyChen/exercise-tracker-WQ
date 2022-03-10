import { useState, React } from 'react';
import Table from '../components/Table';
import TableHead from '../components/TableHead';

export default function EditExercisePage({ exerciseToEdit }) {
  
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);

  return (
    <article>
      <h2>Edit Exercise Page</h2>
      <table>
        <TableHead />
        <tbody>
          <tr>
              <td>
                  <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
              </td>
              <td>
                  <input type="number" name="reps" id="reps" value={reps} onChange={e => setReps(e.target.value)}/>
              </td>
              <td>
                  <input type="number" name="weight" id="weight" value={weight} onChange={e => setWeight(e.target.value)}/>
              </td>
              <td>
                  <select name="unit" id="unit" value={unit} onChange={e => setUnit(e.target.value)}>
                    <option value="lbs" selected>lbs</option>  
                    <option value="kgs">kgs</option>
                  </select>
              </td>
              <td>
                  <input type="text" name="date" placeholder="MM-DD-YY" id="date" value={date} onChange={e => setDate(e.target.value.trim())}/>
              </td>
              <td>
                <button>Save</button>
              </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

  
