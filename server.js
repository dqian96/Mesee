// Entry point 

// Modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var Yelp = require('yelp');

// Creating an app
var app = express();
mongoose.connect('mongodb://localhost:27017/ratemyhouse');
var db = mongoose.connection;
var routes = require('./routes/index');
//app.use(favicon(__dirname + '/public/assets/img/logo.ico'));

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

var yelp = new Yelp({
  consumer_key: 'consumer-key',
  consumer_secret: 'consumer-secret',
  token: 'token',
  token_secret: 'token-secret',
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', routes);
// Server:
// -app listens on 8080 for requests
// -call back once instantiated
var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("App listening at http://%s:%s", host, port)
})

// export of module i.e. return
module.exports = app;

