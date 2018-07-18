const mysql = require('mysql');

let state = {
    pool: null
};


//This will be the public function to create a mysql connection
exports.connect = function(mode, done){

        //This is the current state variable which will be the 
        //mysql pool 
        state.pool = mysql.createPool({
        host:       'localhost',
        user:       'user',
        password:   'secret',
        database:   'db_schema'
    });
};

//This get function will be called by the data model to 
//get the state pool connect and to execute the query
exports.get = function(){
    return state.pool;
}