//main server file
var express = require('express');
var routes = require('./server/routes.js');
var app = express();
//app.use(require('body-parser'));

//the idea i'm trying to do is to get any function from the routes and send the request and the response to it with a callback that will be invoked by that function 
app.get('/', function (req, res) {
    routes.getMainPage(req, res, function (data) {
        res.sendFile(data);
    })
})
app.post('/', function (req, res) {
    routes.findCities(req, res, function (data) {
        res.sendFile(data);
    })
})

var port = process.env.PORT || 3000 ;
app.listen(port , function () {
  console.log('server is on at port : ' + port );
});

module.exports = app;