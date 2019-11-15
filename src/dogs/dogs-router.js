const express = require('express');
const dogQ = require('./dog-queue');

const dogsRouter = express.Router();

dogQ.populateQueue();

dogsRouter
  .route('/')
  .get((req, res) => {
    res.status(200).send(dogQ.viewTopDog());
  })

  .delete((req, res) => {
    res.status(200).send(dogQ.dogAdopted());
  });

module.exports = dogsRouter;
