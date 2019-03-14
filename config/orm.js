// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  //SelectAll function to display all the burgers in the DB
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //insertOne function to insert one burger into the DB
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + "(" + cols + ") " + "VALUES (?)";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
