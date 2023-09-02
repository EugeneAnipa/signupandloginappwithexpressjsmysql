const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (request, respond) {
  respond.render("login");
});

app.post("/", function (request, respond) {
  let Email = request.body.email;
  let Password = request.body.password;
});

app.get("/signup", function (request, respond) {
  respond.render("signup");
});

app.post("/signup", function (request, respond) {
  let Email = request.body.email;
  let Password = request.body.password;
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
