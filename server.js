var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 8080;

var app = express();

//allows for use of the static content in the public folder
app.use(express.static(__dirname + "/public"));

//parse application
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(router);

//set up listener to take in client requests
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});