var express = require("express");
var exphbs = require("express-handlebars");

//Import the controller (routes) file
var controllers = require("./controllers/burgers_controller");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Access the controller (routes) folder
app.use(controllers);

//Access the public folder
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});