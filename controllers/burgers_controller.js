const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    res.render("index", { burger: data });
  });
});

router.post("/api/burger", (req, res) => {
  let burgerName = req.body.name;
  burger.create(burgerName, (data) => {
    res.json({ id: data.id });
  });
});

router.put("/api/burger/:id", (req, res) => {
  let burgerId = req.params.id;
  burger.update(burgerId, (data) => {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
