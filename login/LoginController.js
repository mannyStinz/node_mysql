const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

const login = require('./Login.js');


//Create a get endpoint
router.get('/', function(req, res){
    login.getLogin(function(err, loginValues){
        if(err){
            console.log(err);
            return res.status(403).send("User unauthorized");
        }else{
            res.status(200).send(loginValues);
        }
    });
});

module.exports = router;