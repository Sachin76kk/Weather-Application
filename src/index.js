const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const mongoose = require("mongoose");

// public static path
const staticPath = path.join(__dirname, "../public");


app.set("view engine", "hbs");
app.use(express.static(staticPath));

// routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404", {
    errorMsg: "Oops! Page not Found",
  });
});

app.listen(port, () => {
  console.log(`listening to port no https://localhost:${port}`);
});
