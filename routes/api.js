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

router.post('/createJoke', (req,res,next) => {

  if(req.body.title && req.body.genre && req.body.author && req.body.joke){
    knex('jokes')
    .insert(req.body)
    .returning('*')
    .then((joke) => {
      res.status(200).json(joke);
      console.log('success:', joke);
    })
    .catch((err) => {
      res.json(err);
      console.log('error:', err);
    })
  } else {
    res.json({message: 'Incomplete request'});
  }
})

module.exports = router;
