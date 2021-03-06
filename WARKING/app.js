var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

const route = require('./route');

const port = 3000;

mongoose.connect('mongodb://localhost:27017/userlist');
mongoose.connection.on('connected', function(){
    console.log("Connected to mongodb.");
});
mongoose.connection.on('error', function(err){
    console.log("Error in database connection " + err);
});

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'dist/new-form')));




app.use('/api', route);

app.listen(3000, function(){
    console.log('App running on port : ' + port);
});