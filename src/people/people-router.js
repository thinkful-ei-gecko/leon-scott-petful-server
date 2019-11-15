const express = require('express');
const peepQ = require('./people-queue');

const peepsRouter = express.Router();
const parser = express.json();

peepQ.populateQueue();

peepsRouter
  .route('/all')
  .get((req, res) => {
    res.send(peepQ.getQueue());
  });

peepsRouter
  .route('/next')
  .get((req, res) => {
    res.send(peepQ.viewNextPerson());
  })
  .delete((req, res) => {
    res.send(peepQ.returnRecentAdopters());
  });

peepsRouter
  .route('/')
  .post(parser, (req, res) => {
    const { name } = req.body;
    const newPerson = {
      name,
      wants: null,
      auto: false,
    };
    peepQ.addPersonToQ(newPerson);
    res
      .sendStatus(201);
    // .then((person) => {
    //   res
    //     .send(person);
    // });
  });

module.exports = peepsRouter;
