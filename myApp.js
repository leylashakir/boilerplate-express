var express = require('express');
var app = express();
var dirName = "/app";

var messageString = "Hello json";
if (process.env.MESSAGE_STYLE === "uppercase") {
    messageString.toUpperCase();
  } else {
    messageString;
  }

app.get("/json", (req, res) => {
  res.json({message: messageString});
});

/* app.get("/", (req, res) => {
  res.sendFile(dirName + "/views/index.html");
}); */

app.use("/public", express.static("/app/public"))



console.log("Hello World")
app.get("Hello Express")



































 module.exports = app;
