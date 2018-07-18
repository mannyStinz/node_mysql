const express = require('express');
const app = express();
const db = require('./db');


//Establish connection to database on the start of the API layer
//This will then create a pool that is used while the app is running
db.connect(function(err){
    if(err){
        console.log("Unable to connect to MySQL.");
        process.exit(1);
    }else{
        console.log('Connected to MySQL DB');
    }
});


//Set HEADERS and the allowed verb actions for API layer
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, PATCH, DELETE, OPTIONS');
    next();
});

//Create variables for controllers
const LoginController = require('./login/LoginController');

//Create endpoint for specified controller 
app.use('/login', LoginController);

//Expose app layer
module.exports = app;
