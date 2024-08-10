const mongoose = require("mongoose");

const occupancySchema = new mongoose.Schema({
  carriageNumber: Number,
  occupancyRate: Number, // 0-100 arasında bir değer
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Occupancy", occupancySchema);
