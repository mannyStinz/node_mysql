const app = require('./app');
const port = 3030;

const server = app.listen(port, function(){
    console.log("Server is listening on port " + port);
});