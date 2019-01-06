const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
const validText = require('../../validation/valid-text');

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

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "A user has already registered with this address" })
      } else {
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
          });
        });
      }
    });
});

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
              { expiresIn: 3600 },
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

router.patch('/:user_id/connect', (req, res) => {
  User.findOne({ connectionCode: req.body.connectionCode })
    .then(partner => {
      partner.partnerId = req.params.user_id;
      partner.connected = true;
      partner.save()
        .then(partner => {
          User.findById(req.params.user_id)
          .then(user => {
            user.partnerId = partner.id;
            user.connected = true;
            user.connectionCode = partner.connectionCode;

            user.save()
            .then(user => res.json(user));
          });
        });
    })

  .catch(err =>
    res.status(404).json({ nouserfound: 'No user found with that connection code' })
    );
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        partnerId: user.partnerId,
        connectionCode: user.connectionCode,
        connected: user.connected,
        nickname: user.nickname,
        birthday: user.birthday,
        zipCode: user.zipCode
      });
    })
    .catch (err =>
      res.status(404).json({ nouserfound: 'No User found with that ID' })
    );
});

//update single user
router.patch("/:id", (req, res) => {

  User.findById(req.params.id)
    .then(user => {
      
      user.name = validText(req.body.name) ? req.body.name : user.name; 
      user.email = validText(req.body.email) ? req.body.email : user.email;
      user.partnerId = validText(req.body.partnerId) ? req.body.partnerId : user.partnerId;
      user.connectionCode = validText(req.body.connectionCode) ? req.body.connectionCode : user.connectionCode;
      user.connected = (req.body.connected === undefined) ? user.connected : req.body.connected;
      user.nickname = validText(req.body.nickname) ? req.body.nickname : user.nickname;
      user.birthday = req.body.birthday ? req.body.birthday : user.birthday;
      user.zipCode = req.body.zipCode ? req.body.zipCode : user.zipCode;

      user.save().then(user =>
        res.json(user)
      )
    })
});

module.exports = router;