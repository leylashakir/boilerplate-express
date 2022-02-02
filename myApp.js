var express = require('express');
var app = express();
var dirName = "/app";

app.get("/json", (req, res) => {
  if (/app/.env.MESSAGE_STYLE == "uppercase")
  var response = res.json({
    message: "Hello Json".toUpperCase()
  });

});

/* app.get("/", (req, res) => {
  res.sendFile(dirName + "/views/index.html");
}); */

app.use("/public", express.static("/app/public"))



console.log("Hello World")
app.get("Hello Express")



































 module.exports = app;
