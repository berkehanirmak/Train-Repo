const Occupancy = require("../models/occupancyModel");

// Simüle edilmiş doluluk oranı verisi
const generateRandomOccupancy = () => {
  const carriages = [];
  for (let i = 1; i <= 8; i++) {
    carriages.push({
      carriageNumber: i,
      occupancyRate: Math.floor(Math.random() * 101), // 0-100 arasında rastgele bir değer
    });
  }
  return carriages;
};

exports.getOccupancy = (req, res) => {
  const occupancyData = generateRandomOccupancy();
  res.json(occupancyData);
};
