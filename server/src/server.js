//Imported files that are stored in their respective variables.
var express     = require('express');
var routes      = require('./routes.js')
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var path        = require('path')

//Main variable that calls in the express function.
var app         = new express();

//Connecting to mLab
var mongoURL = 'mongodb://joyousfun:noobies1@ds129281.mlab.com:29281/kld'
mongoose.connect(mongoURL);

//Middlewear that translates info json
app.use(bodyParser.json());
// NEW Middleware to use front end package
app.use(express.static('../client/build'))

//Links the routes file
routes(app);

// NEW When route is not specified in routes serve front end package
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'))
})

//Running the server
app.listen(3000, function() {
  console.log('server is running on port 3000!');
});
