const express = require("express");
const { getOccupancy } = require("../controllers/occupancyController");

const router = express.Router();

router.get("/", getOccupancy);

module.exports = router;
