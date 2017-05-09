module.exports = function(app){
//This part is the beginning of the function.

//Imports the Student and Class Model Schemas.
var Student = require('../models/student.js');
var Class = require('../models/class.js');

//The Info
    app.get('/', function(req, res) {
        res.send([
          '/home', '/about', '/user'
        ]);
    });

//The Homepage
    app.get('/home', function(req, res) {
        res.send('hello');
    });

//The About me page
    app.get('/about', function(req, res) {
        res.send("just do you")
    });

//The User page
    app.get('/user', function(req, res) {
        res.send("Do a / then type anything for that variable");
    });

//The User page extended
    app.get('/user/:userID', function(req, res) {
        res.send(req.params.userID);
    });

//Testing the post method here.
    app.post('/api/user', function (req, res) {
      console.log(req.body)
      var user = {
        name: req.body.name,
        age: req.body.age
      }

      //code to save user to the db
      res.send(req.body);
    })

//This part is the end of the function.
}
