const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport_jwt");
const port = 8000;
app.use(express.urlencoded());

app.use("/", require("./router"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(process.env.PORT || port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is running on port :", port);
});
