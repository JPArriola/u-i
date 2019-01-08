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
const cloudinary = require('cloudinary');
const multer = require("multer");


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



// // MULTER
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     console.log("this is the file that gets stored in multer", file)
//     cb(null, file.originalname)
//   }
// })


// app.post('/upload', (req, res, next) => {
//   const upload = multer({ storage }).single('file')
//   upload(req, res, function (err) {
//     if (err) {
//       return res.send(err)
//     }
//     console.log('this file has been uploaded to server')
//     console.log("FILE:", req.file)

//     // SEND FILE TO CLOUDINARY
//     const cloudinary = require('cloudinary').v2
//     cloudinary.config({
//       cloud_name: process.env.CLOUD_NAME,
//       api_key: process.env.API_KEY,
//       api_secret: process.env.API_SECRET 
//     })

//     const path = req.file.path
//     const uniqueFilename = new Date().toISOString()

//     cloudinary.uploader.upload(path,
//       { public_id: `u-i-media/${uniqueFilename}` },
//       function (err, mediaResult) {
//         if (err) return res.send(err);
//         console.log('file uploaded to Cloudinary');
//         // remove file from server
//         const fs = require('fs')
//         fs.unlinkSync(path)
//         // return image details
//         res.json(mediaResult)
//       }
//     )
//   })
// })



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