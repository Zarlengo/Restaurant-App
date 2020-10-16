const Express = require("express");
const router = Express.router();
// Import the database settings
const burgers = require("../models/burger.js");

// Loading the module to handle the user login settings
const passport = require("../config/passport");

router.get("/", (req, res) => {
    burgers.all(data => {
        res.render("index", {burgers: data});
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
    const condition = `id = ${req.params.id}`;
    burgers.update({
        devoured: req.body.devoured},
        condition, 
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