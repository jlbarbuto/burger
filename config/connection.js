//require mysql npm package
var mysql = require("mysql");

//set up connection with mysql and the burgers_db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "burgers_db"
});

//run the connection
connection.connect(function(err){
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export connection so the ORM can use it for queries
module.exports = connection;