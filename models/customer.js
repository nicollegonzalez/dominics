// models/customer.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const customerSchema = new Schema({
  name: String,
  email: String,
  resturant: String,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;