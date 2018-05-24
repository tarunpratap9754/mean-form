var express = require('express');

var app = express();
var path = require('path');
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3000, function(){
    console.log("This is port 3000 listening");
})

