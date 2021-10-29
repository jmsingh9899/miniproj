const express = require('express');
const router = express.Router();

const travellerRoutes = require("./travellerController");
router.use("/travellers",travellerRoutes);

const tripRoutes = require("./tripController");
router.use("/trips",tripRoutes);

const locationRoutes = require("./locationController");
router.use("/locations",locationRoutes);

module.exports = router;

