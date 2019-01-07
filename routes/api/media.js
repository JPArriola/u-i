// 'use strict'
require("dotenv").config();
const express = require("express");
const router = express.Router();
const Media = require("../../models/Media");
const multer = require("multer");
var AWS = require("aws-sdk");

// Multer ships with storage engines DiskStorage and MemoryStorage
// And Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

// Get all Media Routes
router.route("/").get((req, res, next) => {
  Media.find(
    {},
    null,
    {
      sort: { createdAt: 1 }
    },
    (err, media) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(media);
    }
  );
});

// Route to get a single existing GO data (needed for the Edit functionality)
router.route("/:id").get((req, res, next) => {
  Media.findById(req.params.id, (err, go) => {
    if (err) {
      return next(err);
    }
    res.json(go);
  });
});

// route to upload a media file
// In upload.single("file") - the name inside the single-quote is the name of the field that is going to be uploaded.
router.post("/:album_id/upload", upload.single("file"), function (req, res) {
  const file = req.file;  
  const s3FileURL = process.env.AWS_UPLOADED_FILE_URL_LINK;
  
  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  console.log("access_key_id:", process.env.AWS_ACCESS_KEY_ID);
  console.log("secr_acc_key:", process.env.AWS_SECRET_ACCESS_KEY);

  //Where you want to store your file
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };
  
  console.log("this is the params:", params);
  console.log("-----------------------------------------------");

  s3bucket.upload(params, function (err, data) {
    console.log("error:", err);
    console.log("data:", data);

    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      res.send({ data });
      var newFileUploaded = {
        albumId: req.params.album_id,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };
      var media = new Media(newFileUploaded);
      media.save(function (error, newFile) {
        if (error) {
          throw error;
        }
      });
    }
  });
});

// Router to delete a Media file
router.route("/:id").delete((req, res, next) => {
  Media.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      return next(err);
    }
    //Now Delete the file from AWS-S3 -- https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
    let s3bucket = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    });

    let params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: result.s3_key
    };

    s3bucket.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          status: "200",
          responseType: "string",
          response: "success"
        });
      }
    });
  });
});

module.exports = router;