const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

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

module.exports = router;