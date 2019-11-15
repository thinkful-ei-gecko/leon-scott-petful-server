const express = require('express');
const catQ = require('./cat-queue');

const catsRouter = express.Router();

catQ.populateQueue();

catsRouter
  .route('/')
  .get((req, res) => {
    res.status(200).send(catQ.viewTopCat());
  })

  .delete((req, res) => {
    res.status(200).send(catQ.catAdopted());
  });

catsRouter
  .route('/adopted')
  .get((req, res) => {
    res.status(200).send(catQ.returnRecentCats());
  });

module.exports = catsRouter;
