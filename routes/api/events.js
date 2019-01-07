const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Event = require('../../models/Event');
const validateEventInput = require('../../validation/events');
const validText = require('../../validation/valid-text');

router.get('/user/:user_id', (req, res) => {
  User.findById(req.params.user_id)
    .then(user => {
      const currConnectionCode = user.connectionCode;
      Event.find({ connectionCode: currConnectionCode })
        .sort({ date: -1 })
        .then(events => res.json(events))
        .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
    });
});

router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err =>
      res.status(404).json({ noeventfound: 'No event found with that ID' })
    );
});

router.post('/', (req, res) => {
  const { title, authorId, date } = req.body;
  const { errors, isValid } = validateEventInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findById(authorId)
    .then(user => { 
      const connectionCode = user.connectionCode;
      const newEvent = new Event({ title, authorId, date, connectionCode });
      newEvent.save().then(event => res.json(event));
    });
});

router.patch('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.title = validText(req.body.title) ? req.body.title : event.title;
      event.date = (req.body.date === undefined) ? event.date : req.body.date;
      event.authorId = validText(req.body.authorId) ? req.body.authorId : event.authorId;
      
      event.save().then(event => res.json(event));
    });
});

router.delete('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.remove().then(event => res.json(event));
    })
    .catch(err =>
      res.status(404).json({ noeventfound: 'No event found with that ID' })
    );
});

module.exports = router;

