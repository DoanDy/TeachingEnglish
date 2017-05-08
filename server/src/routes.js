module.exports = function(app){
//This part is the beginning of the function.

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

//This part is the end of the function.
}
