import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import TableHead from '../components/TableHead';

export default function CreateExercisePage() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [date, setDate] = useState("");

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

  const addExercise = async () => {
    const newExercise = {name, reps, weight, unit, date};
    console.log(newExercise)

    const res = await fetch('/exercises', {
      method: 'POST',
      body: JSON.stringify(newExercise),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if(res.status === 201) {
      alert(`${res.status}: ${name} successfully added. Redirecting to home page.`);
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
      addExercise();
    }
  }

    return (
      <article>
        <h2>Create Exercise Page</h2>
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

  
