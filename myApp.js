var express = require('express');
var app = express();
var dirName = "/app";

app.get("/json", (req, res) => {
  res.json({"message": "Hello Json"})
  res.send("/app/json");
});

/* app.get("/", (req, res) => {
  res.sendFile(dirName + "/views/index.html");
}); */

app.use("/public", express.static("/app/public"))



console.log("Hello World")
app.get("Hello Express")



































 module.exports = app;
