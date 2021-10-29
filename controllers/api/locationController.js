const express = require('express');
const router = express.Router();
const {Location, Trip, Traveller} = require('../../models');

router.get("/", (req, res) => {
    Location.findAll({
    }).then(dbLocations => {
        if (dbLocations.length) {
            res.json(dbLocations)
        } else {
            res.status(404).json({ message: "No Locations found!" })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: "an error occured", err: err })
    })
})


module.exports = router;