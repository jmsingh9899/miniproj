const express = require('express');
const router = express.Router();
const { Location, Trip, Traveller } = require('../../models');

router.get("/", (req, res) => {
    Traveller.findAll({
    }).then(dbTravellers => {
        if (dbTravellers.length) {
            res.json(dbTravellers)
        } else {
            res.status(404).json({ message: "No Travellers found!" })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: "an error occured", err: err })
    })
})


router.get("/:id", (req, res) => {
    Traveller.findOne({
        where: {
            id: req.params.id
        },
        include:[Trip]
    }).then(dbTraveller => {
        res.json(dbTraveller)

    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: "an error occured", err: err })
    })
})

router.post("/", (req, res) => {
    Traveller.create({
        name: req.body.name,
        email: req.body.email
    }).then(newTraveller => {
        res.json(newTraveller);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: "an error occured", err: err })
    })
})

router.delete("/:id", (req, res) => {
    Traveller.destroy({
        where: {
            id: req.params.id
        }
    }).then(delTraveller => {
        res.json(delTraveller)
    })
})

module.exports = router;