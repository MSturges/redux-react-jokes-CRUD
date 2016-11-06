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

router.get('/jokes/:id', (req,res,next) => {
  knex('jokes')
  .where({id: req.params.id})
  .first()
  .then((joke) => {
    res.status(200).json(joke);
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

router.delete('/jokes/:id', (req,res,next) => {
  knex('jokes')
  .where({id: req.params.id})
  .del()
  .then(() => {
    res.status(200).json({message: `Deleted joke with id of: ${req.params.id}`});
  })
  .catch((err) => {
    res.json(err);
  })
})




module.exports = router;
