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

//Devour (update) one burger
router.put("/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  var value = req.body.devoured;
  
  burger.updateOne({devoured: value}, condition, function(result) {
    
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
