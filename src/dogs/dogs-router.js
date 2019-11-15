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
    res.send(dogQ.dogAdopted());
  });

dogsRouter
  .route('/adopted')
  .get((req, res) => {
    res.send(dogQ.returnRecentDogs());
  });

module.exports = dogsRouter;
