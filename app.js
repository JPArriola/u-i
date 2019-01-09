require('dotenv').config();
const media = require("./routes/api/media");
const express = require("express");
const path = require('path');
const app = express();
const db = require('./config/keys_main').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const events = require("./routes/api/events");
const albums = require("./routes/api/albums");
const stickys = require("./routes/api/stickys");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Welcome to u&i!"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/events", events);
app.use("/api/albums", albums);
app.use("/api/stickys", stickys);
app.use("/api/media", media);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));