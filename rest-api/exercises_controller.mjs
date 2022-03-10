import * as exercises from './models/exercises_model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

// Allows Express middleware to access images, CSS, and JS files in directory 'public'.
app.use(express.static('public'));

// Used for Express middleware that deals with req.body of POST and PUT requests.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/exercises", (req, res) => {
    exercises.addExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.type('application/json').status(201).send(exercise);
        })
        .catch(error => {
            console.log(error)
            res.status(500).send({ error: 'Request failed' });
        });
});

app.get("/exercises", (req, res) => {
    exercises.getExercises()
        .then(exercises => {
            res.type('application/json').status(200).send(exercises);
        })
        .catch(error => {
            console.log(error)
            res.status(500).send({ error: 'Request failed' });
        });
});

app.put("/exercises/:id", (req, res) => {
    console.log(req.params)
    exercises.setExercise(req.params.id, req.body)
        .then(exercise => {
            res.type('application/json').status(200).send(exercise);
        })
        .catch(error => {
            console.log(error)
            res.status(500).send({ error: 'Request failed' });
        });
});

app.delete("/exercises/:id", (req, res) => {
    exercises.removeExercise(req.params.id)
        .then(exercise => {
            res.status(204)
        })
        .catch(error => {
            console.log(error)
            res.status(500).send({ error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});