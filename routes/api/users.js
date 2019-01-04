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
              connectionCode: user.connectionCode,
              connected: user.connected
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
        })
    })
})

// COMMENT 


//FIX ME! 
// You may want to start commenting in information about your routes so that you can find the appropriate ones quickly.
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    connectionCode: user.connectionCode,
    connected: user.connected
  });
})

router.patch("/:id", (req, res) =>
  res.json({ 
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    connectionCode: req.user.connectionCode,
    connected: req.user.connected,
    nickname: req.user.nickname,
    birthday: req.user.birthday,
    zipCode: req.user.zipCode
  })
);


module.exports = router;


//**************************************************** */

// FRONT END LOGIC => will have a front end /connect page 

// if (!user.connected && connectionCode) {

//   let partner = User.findOne({
//     connectionCode
//   });
//   partner.connected = true;

//   user.connectionCode = connectionCode;
//   user.connected = true;

//   user.partnerId = partner.id;
//   partner.partnerId = user.id;
// }