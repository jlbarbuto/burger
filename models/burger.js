//require orm file
var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    insert: function(cols, vals, cb) {
        orm.insert("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(condition, cb) {
        orm.update("burgers", {devoured: false}, condition, function(res){
            cb(res);
        });
    }
};

//export these functions for the controller to use
module.exports = burger;