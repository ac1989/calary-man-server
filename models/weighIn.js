const mongoose = require('mongoose');
const { Schema } = mongoose;

const weighInSchema = new Schema({
  weight: String,
  date: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = weighInSchema;
