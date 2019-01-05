const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => 
  res.json({ msg: "This is the users route" })
);

function generateRandomCode() {
  let code = "";
  let possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 6; i++) {
    let randomIdx = Math.floor(Math.random() * possibleChar.length);
    code += possibleChar.charAt(randomIdx);
  }
  return code;
}

router.post('/signup', (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({ email: "A user has already registered with this address" })
      } else {
        // Otherwise create a new user
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
          name: req.body.name,
          connectionCode: generateRandomCode()
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})


router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
      email
    })
    .then(user => {
      if (!user) {
        return res.status(404).json({
          email: 'This user does not exist'
        });
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name,
              email: user.email,
              partnerId: user.partnerId,
              connectionCode: user.connectionCode,
              connected: user.connected,
              nickname: user.nickname,
              birthday: user.birthday,
              zipCode: user.zipCode
            };

            jwt.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              {
                expiresIn: 3600
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });

              
          } else {
            return res.status(400).json({
              password: 'Incorrect password'
            });
          }
        });
    });
});

// [promise1, promise2] => [data1, data2]
// Promise.all(array)
  // .then(datainArray)
  // .catch()

router.patch('/:user_id/connect', (req, res) => {
  let partnery;
  User.find({ connectionCode: req.body.connectionCode })
    .then(partner => {
      console.log("this is partnery", partnery)
      partnery = partner;
      User.update(partner, {
        partnerId: req.params.user_id,
        connected: true
      })
      // return partner;
    })
    .then( (partner) => { 
      const currUser = { id: req.params.user_id };
      //update might not return a promise 
      User.update(currUser, {
        partnerId: partner.id,
        connectionCode: partner.connectionCode,
        connected: true,
      });
      return currUser;
    })
    //double check this 
    .then( (currUser) => {
      res.json(currUser);  
    })
    .catch(err =>
      res.status(404).json({ nouserfound: 'No user found with that connection code' })
    );
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch (err =>
      res.status(404).json({ nouserfound: 'No User found with that ID' })
    );
});

//update single user
router.patch("/:id", (req, res) => {
  const user = { _id: req.params.id };

  User.updateOne(user, {
    name: req.body.name,
    email: req.body.email,
    partnerId: req.body.partnerId,
    connectionCode: req.body.connectionCode,
    connected: req.body.connected,
    nickname: req.body.nickname,
    birthday: req.body.birthday,
    zipCode: req.body.zipCode
  }, function(err) {
    User.findOne({ _id: req.params.id }, function(err, user) {
      res.send(user);
    });
  });
});

module.exports = router;