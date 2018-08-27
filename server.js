// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var tables = require("./api/tables.json");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/tables", function(req, res) {
  // /////////////////////// req.body hosts is equal to the JSON post sent from the user
  // /////////////////////// This works because of our body-parser middleware
  // var newcharacter = req.body;
  // ///////////////////////// Using a RegEx Pattern to remove spaces from newCharacter
  // /////////////////////// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  // console.log(newcharacter);
  // characters.push(newcharacter);
  // res.json(newcharacter);

  // ///////////////////////

  //tables.push({ foo: "bar" });
  tables.push(req.body);

  res.json(tables);
});

app.get("/api/tables", function(req, res) {
  res.json(tables);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
//console.trace("test");
