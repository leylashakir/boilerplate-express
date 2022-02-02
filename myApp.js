var express = require('express');
var app = express();
var dirName = "/app";

app.get("/", (req, res) => {
  res.sendFile(dirName + "/views/index.html");
});

console.log("Hello World")
app.get("Hello Express")



































 module.exports = app;
