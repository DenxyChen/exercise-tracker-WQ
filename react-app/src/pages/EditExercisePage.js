import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import TableHead from '../components/TableHead';

export default function EditExercisePage({ exerciseToEdit }) {
  let navigate = useNavigate();
  
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);

  const validateDate = () => {
    if(date.length !== 8) {
      return false;
    }
    else if(date[2] !== '-' || date[5] !== '-') {
      return false;
    }
    else if(date.charCodeAt(0) > 49 || date.charCodeAt(3) > 51) {
      return false;
    }
    return true;
  }

  const editExercise = async () => {
    const updatedExercise = {name, reps, weight, unit, date};
    console.log(updatedExercise)

    const res = await fetch(`/exercises/${exerciseToEdit._id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedExercise),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if(res.status === 200) {
      alert(`${res.status}: ${name} successfully edited. Redirecting to home page.`);
      navigate('/')
    }
    else{
      alert(`${res.status}: An error occured. Please refresh the page and try again.`);
    }
  }
  
  const validateForm = () => {
    if (name === "" || reps === "" || weight === "" || date === "") {
      alert("All fields are required!");
    }
    else if(!validateDate()){
      alert("Invalid date. Please follow the format MM-DD-YY.");
    }
    else{
      editExercise();
    }
  }

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
                <button onClick={() => validateForm()}>Save</button>
              </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

  
