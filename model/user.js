const express = require("express");
const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  phone: {
    type: String,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
