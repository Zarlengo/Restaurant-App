// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets the public folder for files to be accessed within the app
const path = require("path");
app.use("/public", express.static(path.join(__dirname, 'public')));

// Coding to json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = require("./config/connection");

// Connect to our database
connection.connect((err, response) => {
  if (err) {
    return console.log(err);
  }
  console.log("connected as id " + response.processID);

  // Adds routes
  const routes = require("./controllers/burger_controller.js")(connection);
  app.use(routes);

  // Start our server and print to server when it has started
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});