//Imported files that are stored in their respective variables.
var express = require('express');
var routes = require('./routes.js')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connecting to mLab
var mongoURL = 'mongodb://joyousfun:noobies1@ds129281.mlab.com:29281/kld'
mongoose.connect(mongoURL);

//Main variable that calls in the express function.
var app = express();

//Middlewear that translates info json
app.use(bodyParser.json());

//Links the routes file
routes(app);

//Running the server
app.listen(3000, function() {
  console.log('server is running on port 3000!');
});
