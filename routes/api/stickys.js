const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Sticky = require('../../models/sticky');
const validateStickyInput = require('../../validation/stickys');
const validText = require('../../validation/valid-text');


router.post('/', (req, res) => {
  const {body, authorId, date} = req.body;
  const {
    errors,
    isValid
  } = validateStickyInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findById(authorId)
    .then(user => {
      const connectionCode = user.connectionCode;
      const receiverId = user.partnerId;
      const newSticky = new Sticky({body, authorId, receiverId, date, connectionCode});
      newSticky.save().then(sticky => res.json(sticky));
    });
});

router.get('/:id', (req, res) => {
  Sticky.findById(req.params.id)
    .then(sticky => res.json(sticky))
    .catch(err =>
      res.status(404).json({
        nostickyfound: 'No sticky found with that ID'
      })
    );
});

router.get('/user/:user_id', (req, res) => {
  User.findById(req.params.user_id)
    .then(user => {
      const currConnectionCode = user.connectionCode;
      Sticky.find({
          connectionCode: currConnectionCode
        })
        .sort({ date: -1 })
        .then(stickys => {
          let stickyObject = {};
          stickys.forEach( (sticky) => stickyObject[sticky.id] = sticky);
          res.json(stickyObject);
        })
        .catch(err => res.status(404).json({
          nostickysfound: 'No stickys found'
        }));
    });
});

router.patch('/:id', (req, res) => {
  Sticky.findById(req.params.id)
    .then(sticky => {
      sticky.body = validText(req.body.body) ? req.body.body : sticky.body;
      sticky.date = (req.body.date === undefined) ? sticky.date : req.body.date;
      sticky.save().then(sticky => res.json(sticky));
    });
});

router.delete('/:id', (req, res) => {
  Sticky.findById(req.params.id)
    .then(sticky => {
      sticky.remove().then(sticky => res.json(sticky));
    })
    .catch(err =>
      res.status(404).json({
        nostickyfound: 'No sticky found with that ID'
      })
    );
});

module.exports = router;
