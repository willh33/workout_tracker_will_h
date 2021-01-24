const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
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
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
