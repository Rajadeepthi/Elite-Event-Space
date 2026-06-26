const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  hallName: String,
  eventDate: String,
  guests: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);