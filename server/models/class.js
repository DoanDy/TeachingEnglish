//Imports mongoose to the respective variable.
var mongoose = require('mongoose');

//Creates Schemas
var Schema = mongoose.Schema;

//Class Schema
var classSchema = new Schema({
  name:       { type: String, required: true, unique: true },
  gradeLevel: { type: String, required: true },
  time:       { type: String, required: true, unique: true },
  price:      { type: String, required: true }
})

//Creates an export for the Class Model
module.exports = mongoose.model("Class", classSchema);
