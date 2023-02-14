// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Packages>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const { urlencoded } = require("express");
const express = require("express");
const app = express();
const path=require('path')
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Packages>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Middleware>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Middleware>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ROUTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

app.get("/", (req, res) => {
  res.send("Welcome to mining!!");
});

app.get("/students", (req, res) => {
  res.render("student")
});

app.get("/faculty", (req, res) => {
  res.render("faculty")
});

app.get("/events", (req, res) => {
  res.render("events")
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ROUTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

app.listen(3000, () => {
  console.log("Server Started");
});
