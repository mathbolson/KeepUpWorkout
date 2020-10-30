const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
    day:  Date,
    exercises : [{
      typeOf: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      duration: Number,
    }]
  });

  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;