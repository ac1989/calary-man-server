const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  google: {
    id: String,
    username: String
  },
  github: {
    id: String,
    username: String
  }
});

mongoose.model('users', userSchema);
