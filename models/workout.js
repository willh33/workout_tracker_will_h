const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
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
      }
    }
  ]
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
