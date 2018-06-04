//require mysql npm package
var mysql = require("mysql");
var connection;

//set up connection with mysql and the burgers_db
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1234",
        database: "burgers_db"
    });
};

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