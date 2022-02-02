var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var dirName = "/app";

app.use(bodyParser.urlencoded({ extended: false }));

app.route("/name").get((req, res) => {
  console.log(req.query)
  var firstname = req.query.first
  var lastname = req.query.last
  var name = firstname + " " + lastname
  res.json({name: name})
}).post((req, res) => {
  var firstname = req.body.first
  var lastname = req.body.last
  res.json({name: firstname + " " + lastname})
})


/* app.get("/:word/echo", (req, res) => {
  var word = req.params.word
  res.json({echo: word})
})
*/
/* app.use(function middleware(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
*/
/* app.get("/now", function middleware(req, res, next) {
  req.time = new Date().toString();
  next();
}, function returnTime(req, res) {
  res.json({time: req.time})
});

var response = "Hello json";
if (process.env.MESSAGE_STYLE === "uppercase") {
    response.toUpperCase();
  } else {
    response;
  }
  
  */

/*app.get("/json", (req, res) => {
  res.json({message: response});
});

app.get("/", (req, res) => {
  res.sendFile(dirName + "/views/index.html");
});
*/
app.use("/public", express.static("/app/public"))



































 module.exports = app;
