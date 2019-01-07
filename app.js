//CHANGE #1
require('dotenv').config();
const media = require("./routes/api/media");
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//FIX ME! - comment out later
app.get("/", (req, res) => res.send("Welcome to u&i!"));

app.use(passport.initialize());
require('./config/passport')(passport);


app.use("/api/users", users);
app.use("/api/events", events);
app.use("/api/albums", albums);
app.use("/api/stickys", stickys);


//CHANGE #3
app.use("/api/media", media);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.status(err.status || 500);
//   res.render("error");
// });


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));