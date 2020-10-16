// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets the public folder for files to be accessed within the app
app.use(express.static("public"));

// Coding to json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Adds routes
const routes = require("./controllers/burger_controller.js");
app.use(routes);

// Start our server and print to server when it has started
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
