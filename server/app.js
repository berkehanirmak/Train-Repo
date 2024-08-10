const express = require("express");
const cors = require("cors");
const occupancyRoutes = require("./routes/occupancyRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/occupancy", occupancyRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
