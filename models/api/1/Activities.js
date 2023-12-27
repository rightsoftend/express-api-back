/*
 * Copyright (c) 2023 Baza Trainee Ukraine
 * Developers:
 *   - Volodymyr Nerovnia
 *
 * SPDX-License-Identifier: MIT
 */

const { Schema, model } = require("mongoose");
const Picture = require("./Common/Picture");

const Activities = new Schema({
  picture: Picture,
});

module.exports = model("Activities", Activities);
