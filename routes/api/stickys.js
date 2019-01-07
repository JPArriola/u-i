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



module.exports = router;
