const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helpers = require('./helpers');
const fs = require('promise-fs');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/client'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.post('/', function(req,res) {

});


var port = process.env.PORT || 3000;
app.listen(port);
console.log('server listening on port 3000');