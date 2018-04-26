const mongoose = require('mongoose');
const { Schema } = mongoose;
const WeighInSchema = require('./weighIn');

const userSchema = new Schema({
  google: {
    id: String,
    username: String
  },
  github: {
    id: String,
    username: String
  },
  data: {
    height: String,
    weight: String,
    age: String,
    gender: String,
    activityLevel: String,
    dietaryGoal: String
  },
  weighIns: [WeighInSchema],
  preferences: {
    heightUnit: { type: String, default: 'cm' },
    weightUnit: { type: String, default: 'kg' }
  }
});

mongoose.model('users', userSchema);
