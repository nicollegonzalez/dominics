// models/book.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const locationSchema = new Schema({
  locationRoute: String,
  locationTagAlt: String,
  locationName:   String,
  locationCity: String,
  locationNumber: String,
  locationImage: String,
  mapURL: String,
  lunchMenu: String,
  dinnerMenu: String,
  childrenMenu: String,
  locationAddress: {
    description: String,
    addressURL: String,
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  locationHours:{
    sunday: String,
    secondLabel: String,
    mondayThursday: String,
    thirdLabel: String,
    fridaySaturday: String,
  },
  locationContact:{
    locationPhoneNumber: String,
    locationEmail: String,
  },
  deals: Boolean,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;