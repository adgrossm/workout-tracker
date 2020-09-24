const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "type required"
      },
      name: {
        type: String,
        trim: true,
        required: "name required"
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default:0
      },
    },
  ]
},
{
  toJSON: {
    virtuals: true
    
  }
});

WorkoutSchema.virtual("totalDuration").get(function() {
return this.exercises.reduce((total, exercise) => {
  return total + exercise.duration
}, 0)
})

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
