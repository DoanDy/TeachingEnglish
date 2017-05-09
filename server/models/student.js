//Imports mongoose to the respective variable.
var mongoose = require('mongoose');

//Connecting to mLab
var mongoURL = 'mongodb://joyousfun:noobies1@ds129281.mlab.com:29281/kld'
mongoose.connect(mongoURL);

//Creates Schemas
var Schema = mongoose.Schema

//Student Schema
var studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  contact: {
    type: String,
    required: true
  },
  profileImgeUrl: {
    type: String,
    default: 'https://cdn4.designbyhumans.com/img/blank-user-100.gif'
  }
})

//Creates a student variable that follows the studentSchema
var Student = mongoose.model("Student", studentSchema);

//Creates an export for the Student Model.
module.exports = Student;

var robin = new Student({
  name: 'Robin',
  age: 6,
  contact: '0905086088'
})

console.log(robin._id);
