/*
 * Copyright (c) 2023 Baza Trainee Ukraine
 * Developers:
 *   - Volodymyr Nerovnia
 *
 * SPDX-License-Identifier: MIT
 */

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
