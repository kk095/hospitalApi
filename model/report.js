const express = require("express");
const mongoose = require("mongoose");

let reportSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

let Report = mongoose.model("Report", reportSchema);

module.exports = Report;
