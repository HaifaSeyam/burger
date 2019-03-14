// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

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
  },
  //updateOne function to update one column in the DB
  updateOne: function(table, objColVals, condition, cb) {
   
    var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
    
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
