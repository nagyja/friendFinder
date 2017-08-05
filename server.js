//Required npm
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Handle data parsing with Express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use("/script", express.static("app/public/js"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});