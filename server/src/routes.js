module.exports = function(app){
//This part is the beginning of the function.

//Imports the Student and Class Model Schemas.
var Student = require('../models/student.js');
var Class = require('../models/class.js');

//The Info
    app.get('/', function(req, res) {
        res.send([ '/user', '/api/students', 'classes' ]);
    });

//The User page
    app.get('/user', function(req, res) {
        res.send("Do a / then type anything for that variable");
    });

//The User page extended
    app.get('/user/:userID', function(req, res) {
        res.send(req.params.userID);
    });

//Testing Student Schema
    app.post('/api/students', function (req, res) {
        var student = new Student();
        student.name = req.body.name;
        student.age = req.body.age;
        student.contact = req.body.contact;
        student.save();
        res.send(student._id);
    })

//Testing Class Schema
    app.post('/api/classes', function (req, res) {
        var englishClass = new Class();
        englishClass.name = req.body.name;
        englishClass.gradeLevel = req.body.age;
        englishClass.time = req.body.contact;
        englishClass.price = req.body.price;
        englishClass.save();
        res.send(englishClass._id);
    })

//This part is the end of the function.
}
