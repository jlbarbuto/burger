//require orm file
var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: function(cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(id,cb) {
        orm.updateOne("burgers", id, function(res){
            cb(res);
        });
    }
};

//export these functions for the controller to use
module.exports = burger;