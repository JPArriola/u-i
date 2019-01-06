const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Event = require('../../models/Event');
const validateEventInput = require('../../validation/events');

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

//FIX ME! - want some authentication in order for specific user/author to update an event
router.patch('/:id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateEventInput(req.title);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      const newEvent = new Event({
        title: req.body.title,
        user: req.user.id
      });

      newEvent.save().then(event => res.json(event));
    }

  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err =>
      res.status(404).json({ noeventfound: 'No event found with that ID' })
    );
});

//FIX ME! - want some authentication in order for specific user/author to delete an event
router.delete('/:id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateEventInput(req.title);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      const newEvent = new Event({
        title: req.body.title,
        user: req.user.id
      });

      newEvent.save().then(event => res.json(event));
    }
  
  // Event.findById(req.params.id)
  //   .then(event => res.json(event))
  //   .catch(err =>
  //     res.status(404).json({ noeventfound: 'No event found with that ID' })
  //   );
});

module.exports = router;







// router.get('/user/:user_id', (req, res) => {
//   let currUser = User.findById(req.params.user_id);
//   let currConnectionCode = currUser.connectionCode;

//   Event.find({ connectionCode: currConnectionCode })
//     .then(events => res.json(events))
//     .catch(err =>
//       res.status(404).json({ noeventsfound: 'No events found' }
//       )
//     );
// });

// router.get('/:id', (req, res) => {
//   Event.findById(req.params.id)
//     .then(event => res.json(event))
//     .catch(err =>
//       res.status(404).json({ noeventfound: 'No event found with that ID' })
//     );
// });

// //FIX ME!
// router.post('/',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateEventInput(req.title);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const newEvent = new Event({
//       title: req.body.title,
//       user: req.user.id
//     });

//     newEvent.save().then(event => res.json(event));
//   }
// );

// //FIX ME! - want some authentication in order for specific user/author to update an event
// router.patch('/:id', (req, res) => {
//   passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//       const { errors, isValid } = validateEventInput(req.title);

//       if (!isValid) {
//         return res.status(400).json(errors);
//       }

//       const newEvent = new Event({
//         title: req.body.title,
//         user: req.user.id
//       });

//       newEvent.save().then(event => res.json(event));
//     }

//   Event.findById(req.params.id)
//     .then(event => res.json(event))
//     .catch(err =>
//       res.status(404).json({ noeventfound: 'No event found with that ID' })
//     );
// });

// //FIX ME! - want some authentication in order for specific user/author to delete an event
// router.delete('/:id', (req, res) => {
//   passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//       const { errors, isValid } = validateEventInput(req.title);

//       if (!isValid) {
//         return res.status(400).json(errors);
//       }

