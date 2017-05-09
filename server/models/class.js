//Imports mongoose to the respective variable.
var mongoose = require('mongoose');

//Connecting to mLab
var mongoURL = 'mongodb://joyousfun:noobies1@ds129281.mlab.com:29281/kld'
mongoose.connect(mongoURL);

//Creates Schemas
var Schema = mongoose.Schema

//Class Schema
var classSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gradeLevel: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

//Creates a class variable that follows the classSchema
var Class = mongoose.model("Class", classSchema);

//Creates an export for the Class Model.
module.exports = Class;
