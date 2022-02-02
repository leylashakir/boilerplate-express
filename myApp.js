var express = require('express');
var app = express();
var dirName = "clammy-silent-furniture"
var absolutePath = dirName + "/views/index.html"

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

console.log("Hello World")
app.get("Hello Express")



































 module.exports = app;
