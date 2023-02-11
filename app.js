// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Packages>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const express = require("express");
const app = express();
const path=require('path')
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Packages>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Middleware>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.set("views", path.join(__dirname, "views"));
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Middleware>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ROUTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

app.get("/", (req, res) => {
  res.send("Welcome to mining!!");
});

app.get("/students", (req, res) => {
  res.send("this is student section!!");
});

app.get("/faculty", (req, res) => {
  res.send("this is faculty section");
});

app.get("/events", (req, res) => {
  res.send("this is event section");
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ROUTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

app.listen(3000, () => {
  console.log("Server Started");
});
