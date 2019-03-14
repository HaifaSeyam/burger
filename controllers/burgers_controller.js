//Dependencies 
var express = require("express");
var router = express.Router();

// Import the model to use its database functions
var burger = require("../models/burger.js");

// Display all burgers
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// Add one burger
router.post("/add", function(req, res) {
  var burger_Name = req.body.name;

  burger.insertOne(["burger_name"], [burger_Name], function(result) {

    // Send back the ID and name of the burger
    res.json({ 
      id: result.insertId,
      burger_name: burger_Name
    });
  })
});

// Export routes for server.js to use.
module.exports = router;
