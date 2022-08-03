const express = require("express");
const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
  },
});

let Product = mongoose.model("Product", productSchema);

module.exports = Product;
