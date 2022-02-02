var express = require('express');
var app = express();
var dirName = "/app";

app.get("/", (req, res) => {
  res.sendFile(dirName.join("/views/index.html"));
});

app.use(express.static(dirName.join("/views")))

console.log("Hello World")
app.get("Hello Express")



































 module.exports = app;
