require('dotenv').config();
const cloudinary = require('cloudinary');
const express = require("express");
const router = express.Router();
const Media = require("../../models/Media");
const multer = require("multer");

// MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    console.log("this is the file that gets stored in multer", file)
    cb(null, file.originalname)
  }
})

router.post('/upload', (req, res) => {
  const upload = multer({ storage }).single('file');
  upload(req, res, function (err) {
    if (err) {
      return res.send(err)
    }
    console.log('this file has been uploaded to server')
    console.log("FILE:", req.file)

    // SEND FILE TO CLOUDINARY
    const cloudinary = require('cloudinary').v2
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
    });

    const path = req.file.path
    const uniqueFilename = new Date().toISOString()

    cloudinary.uploader.upload(path,
      { public_id: `u-i-media/${uniqueFilename}` },
      function (err, mediaResult) {
        if (err) return res.send(err);
        console.log('file uploaded to Cloudinary');
        // remove file from server
        const fs = require('fs')
        fs.unlinkSync(path)
        // return image details
        res.json(mediaResult)
      }
    );
  });
});

//get all media tied to specific album
router.get('/:album_id', (req, res) => {
  Media.find({ albumId: req.params.album_id })
    .then(media => {
      const mediaObject = {};

      media.forEach( media => {
        mediaObject[media.id] = media;
      });
      res.json(mediaObject);
    })
    .catch(err => res.status(404).json({ nomediafound: 'No media found' }));
});

module.exports = router;










// -------- AWS ----------


// // 'use strict'
// require("dotenv").config();
// const express = require("express");
// const router = express.Router();
// const Media = require("../../models/Media");
// const multer = require("multer");
// const AWS = require("aws-sdk");

// // Multer ships with storage engines DiskStorage and MemoryStorage
// // And Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


// // Get all Media Routes
// router.route("/:album_id").get((req, res, next) => {
//   Media.find(
//     {},
//     null,
//     {
//       sort: { createdAt: 1 }
//     },
//     (err, media) => {
//       if (err) {
//         return next(err);
//       }
//       res.status(200).send(media);
//     }
//   );
// });

// // Route to get a single existing GO data (needed for the Edit functionality)
// router.route("/:id").get((req, res, next) => {
//   Media.findById(req.params.id, (err, go) => {
//     if (err) {
//       return next(err);
//     }
//     res.json(go);
//   });
// });

// // route to upload a media file
// // In upload.single("file") - the name inside the single-quote is the name of the field that is going to be uploaded.
// router.post("/:album_id/upload", upload.single("file"), function (req, res) {
//   const file = req.file;  
//   const s3FileURL = process.env.AWS_UPLOADED_FILE_URL_LINK;
  
//   let s3bucket = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
//   });

//   console.log("access_key_id:", process.env.AWS_ACCESS_KEY_ID);
//   console.log("secr_acc_key:", process.env.AWS_SECRET_ACCESS_KEY);

//   //Where you want to store your file
//   const params = {
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: file.originalname,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//     ACL: "public-read"
//   };
  
//   console.log("this is the params:", params);
//   console.log("-----------------------------------------------");

//   s3bucket.upload(params, function (err, data) {
//     console.log("error:", err);
//     console.log("data:", data);

//     if (err) {
//       res.status(500).json({ error: true, Message: err });
//     } else {
//       res.send({ data });
//       const newFileUploaded = {
//         albumId: req.params.album_id,
//         fileLink: s3FileURL + file.originalname,
//         s3_key: params.Key
//       };
//       const media = new Media(newFileUploaded);
//       media.save(function (error, newFile) {
//         if (error) {
//           throw error;
//         }
//       });
//     }
//   });
// });

// // Router to delete a Media file
// router.route("/:id").delete((req, res, next) => {
//   Media.findByIdAndRemove(req.params.id, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     //Now Delete the file from AWS-S3 -- https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
//     let s3bucket = new AWS.S3({
//       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//       region: process.env.AWS_REGION
//     });

//     let params = {
//       Bucket: process.env.AWS_BUCKET_NAME,
//       Key: result.s3_key
//     };

//     s3bucket.deleteObject(params, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send({
//           status: "200",
//           responseType: "string",
//           response: "success"
//         });
//       }
//     });
//   });
// });

// module.exports = router;