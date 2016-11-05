'use strict';
const express = require('express');
const router = express.Router();
const knex = require("../db/knex.js");

router.get('/jokes', (req,res,next) => {
  knex('jokes')
  .then((jokes) => {
    res.status(200).json(jokes);
  })
  .catch((err) => {
    res.json(err);
  })
})
