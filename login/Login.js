const db = require('../db.js');

//This is the get function that is called by the controller

exports.getLogin = function(done){
    //Create your query to run
    let query = 'SELECT * FROM LOGIN;';

    //Using the db object, call the get function to run the query
    //this will use the polled connection --> run the query --> then close the connection
    db.get().query(query
    ,function(err, result){
        if(err){
            done(err);
        }else{
            done(null, result);
        }
    });
};