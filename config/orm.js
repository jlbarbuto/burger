var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") ";
        queryString += "VALUES (?,?)";

        console.log(queryString); 
        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, id, cb){
        var queryString = "UPDATE " + table + " SET devoured = true WHERE id = " + id;
    }

}

module.exports = orm;