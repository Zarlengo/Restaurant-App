module.exports = (client) => {
    const Express = require("express");
    const router = Express.Router();
    // Import the database settings
    const db = require("../models/burger.js")(client);

    router.get("/", (_req, res) => {
        db.burger.findBy("devoured", true, devoured_data => {
            db.burger.findBy("devoured", false, burger_data => {
                db.menu.all(menu_data => {
                // Delete placeholder for handlebars
                menu_data.rows.shift();
                res.render("index", {menu: menu_data.rows, burger: burger_data.rows, devoured: devoured_data.rows});
                });
            });
        });
    });

    router.get("/api/burger", (_req, res) => {
        db.burger.all(data => {
            res.json({burgers: data.rows});
        });
    });

    router.post("/api/burger", (req, res) => {
        db.burger.create(
            ["burger_name","devoured", "menu_id"],
            [`'${ req.body.burger_name }'`, false, 1],
            "burger_id",
            result => {
                res.json({id: result.rows[0].burger_id})
            }
        );
    });

    router.put("/api/burger/:id", (req, res) => {
        db.burger.update({
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

    router.post("/api/burger/:id", (req, res) => {
        db.burger.create(
            ["burger_name","devoured", "menu_id"],
            [`'${ req.body.burger_name }'`, false, req.params.id],
            "burger_id",
            result => {
                res.json({id: result.insertId})
            }
        ); 
    });

    return router;
}