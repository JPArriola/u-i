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
    cb(null, file.originalname)
  }
})

router.post('/:album_id/upload', (req, res) => {
  const upload = multer({ storage }).single('file');
  upload(req, res, function (err) {
    if (err) {
      return res.send(err)
    }

//TEST TO UPLOAD AND CREATE NEW MEDIA FILE 
    const cloudinary = require('cloudinary').v2
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
    });

    const path = req.file.path;
    const uniqueFilename = new Date().toISOString();

    cloudinary.uploader.upload(path,
      { public_id: `u-i-media/${uniqueFilename}` },
      function (err, mediaResult) {
        if (err) return res.send(err);
        
        // remove file from server
        const fs = require('fs');
        fs.unlinkSync(path);
        //save file info to media model db
        const newMediaFile = new Media({ 
          albumId: req.params.album_id,
          fileLink: mediaResult.url
        });
        
        newMediaFile.save()
          .then( media => { res.json(media) })
          .catch(err => res.status(404).json({ noalbumfound: 'Could not save media file' }));
      });
  });
});

//get all media tied to specific album
router.get('/album/:album_id', (req, res) => {
  Media.find({ albumId: req.params.album_id })
    .then(media => {
      const mediaObject = {};

      media.forEach( media => {
        mediaObject[media._id] = media;
      });
      res.json(mediaObject);
    })
    .catch(err => res.status(404).json({ nomediafound: 'No media found' }));
});

//get specific media file
router.get('/:id', (req, res) => {
  Media.findById(req.params.id)
    .then(media => res.json(media))
    .catch(err => res.status(404).json({ nomediafound: 'No media found with that ID' }));
});

router.delete('/:id', (req, res) => {
  Media.findById(req.params.id)
    .then(media => {
      media.remove().then(media => res.json(media));
    })
    .catch(err =>
      res.status(404).json({ nomediafound: 'No media found with that ID' })
    );
});

module.exports = router;