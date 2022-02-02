var express = require('express');
var app = express();
var dirName = "/app";

app.get("/json", (req, res) => {
  var response = res.json({
    message: "Hello Json"
  });
  if (/app/.env.MESSAGE_STYLE == "uppercase") {
    response.toUpperCase()
  } else {
    response;
  }
  
});

/* app.get("/", (req, res) => {
  res.sendFile(dirName + "/views/index.html");
}); */

app.use("/public", express.static("/app/public"))



console.log("Hello World")
app.get("Hello Express")



































 module.exports = app;
