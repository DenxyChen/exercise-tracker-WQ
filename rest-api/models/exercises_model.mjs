// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database exercises_db in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb://localhost:27017/exercises_db',
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

/**
 * Define the schema for an exercise.
 */
 const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true },
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
 const Exercise = mongoose.model("Exercise", exerciseSchema);

 /**
 * Add an exercise with the required parameters.
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight 
 * @param {String} unit
 * @param {String} date
 * @returns A promise. Resolves to the JSON object for the document created by calling save.
 */
const addExercise = async (name, reps, weight, unit, date) => {
    // Create a new Exercise object with the given properties
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    // Call save to persist this object as a document in MongoDB
    return exercise.save();
}

/**
 * Retrive all exercises.
 * @param {Array} filter 
 * @returns 
 */
 const getExercises = async () => {
    const query = Exercise.find();
    return query.exec();
}

/**
 * Updates all properties of the existing exercise.
 * @param {String} _id 
 * @param {Object} update 
 * @returns A promise. Resolves to the JSON object for the updated document.
 */
 const setExercise = async (_id, update) => {
    console.log(_id)
    const result = await Exercise.findOneAndUpdate({ _id: _id }, update, {new: true})
    return result;
}

/**
 * Delete the exercise with the given ID.
 * @param {String} _id 
 * @returns A promise. Resolves to the count of deleted documents.
 */
 const removeExercise = async (_id) => {
    const result = await Exercise.deleteOne({_id, _id});
    return result.deletedCount;
}

export { addExercise, getExercises, setExercise, removeExercise }