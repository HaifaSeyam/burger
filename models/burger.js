// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//Model object with three functions to call the ORM functions
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;
