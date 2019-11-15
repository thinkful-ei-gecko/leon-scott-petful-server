const express = require('express');
const dogQ = require('./dog-queue');

const dogsRouter = express.Router();

dogQ.populateQueue();

dogsRouter
  .route('/')
  .get((req, res) => {
    res.send(dogQ.viewTopDog());
  })

  .delete((req, res) => {
    dogQ.dogAdopted();
    res.send(dogQ.dogAdopted());
  });

module.exports = dogsRouter;
