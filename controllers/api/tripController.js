const express = require('express');
const router = express.Router();
const {Location, Trip, Traveller} = require('../../models');

router.get("/", (req, res) => {
    Trip.findAll({
    }).then(dbTrips => {
        if (dbTrips.length) {
            res.json(dbTrips)
        } else {
            res.status(404).json({ message: "No Trips found!" })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: "an error occured", err: err })
    })
})


module.exports = router;