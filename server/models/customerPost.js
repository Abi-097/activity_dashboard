const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter"],
    },
    email: {
      type: String,
      required: [true, "Please Enter"],
    },
    phone: {
      type: String,
      required: [true, "Please Enter"],
    },
    message: {
      type: String,
      required: [true, "Please Enter"],
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Product", customerSchema);

module.exports = Customer;
