//Imports mongoose to the respective variable.
var mongoose = require('mongoose');

//Creates Schemas
var Schema = mongoose.Schema;

//Student Schema
var studentSchema = new Schema({
  name:           { type: String, required: true },
  age:            Number,
  contact:        { type: String, required: true },
})

//Creates an export for the Student Model.
module.exports = mongoose.model("Student", studentSchema);
