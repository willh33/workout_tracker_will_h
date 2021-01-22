const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// type: "resistance",
//         name: "Military Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4


const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for Workout"
  },
  type: {
    type: String,
    required: "Enter the workout type"
  },
  duration: {
    type: Number,
    required: "Enter the workout duration"
  },
  weight: {
    type: Number,
    required: "Enter the amount lifted"
  },
  reps: {
    type: Number,
    required: "Enter the # of reps"
  },
  reps: {
    type: Number,
    required: "Enter the # of sets"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
