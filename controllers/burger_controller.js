const Express = require("express");
const router = Express.Router();
// Import the database settings
const burgers = require("../models/burger.js");

router.get("/", (req, res) => {
    burgers.all(data => {
        res.render("index", {burgers: data});
    });
});

router.get("/api/burger", (req, res) => {
    burgers.all(data => {
        res.json({burgers: data});
    });
});

router.post("/api/burger", (req, res) => {
    burgers.create(
        ["burger_name","devoured"],
        [req.body.burger_name, req.body.devoured],
        result => {
            res.json({id: result.insertId})
        });
});

router.put("/api/burger/:id", (req, res) => {
    burgers.update({
        devoured: req.body.devoured},
        {id: req.params.id}, 
        result => {
            if (result.changedRoes == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

module.exports = router;