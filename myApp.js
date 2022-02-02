var express = require('express');
var app = express();
var dirName = "/app";

function middleware(req, res, next) {
  if(res.status) {
    console.log(req.method);
    console.log(req.path);
    console.log(req.ip);
  }
  
  next();
  
}

app.use(middleware());

var response = "Hello json";
if (process.env.MESSAGE_STYLE === "uppercase") {
    response.toUpperCase();
  } else {
    response;
  }

app.get("/json", (req, res) => {
  res.json({message: response});
});

/* app.get("/", (req, res) => {
  res.sendFile(dirName + "/views/index.html");
}); */

app.use("/public", express.static("/app/public"))



































 module.exports = app;
