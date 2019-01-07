const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Album = require('../../models/Album');
const validateAlbumInput = require('../../validation/albums');
const validText = require('../../validation/valid-text');

router.get('/user/:user_id', (req, res) => {
  User.findById(req.params.user_id)
    .then(user => {
      const currConnectionCode = user.connectionCode;

      Album.find({ connectionCode: currConnectionCode })
        .then(albums => res.json(albums))
        .catch(err => res.status(404).json({ noalbumsfound: 'No albums found' }));
    });
});

router.get('/:id', (req, res) => {
  Album.findById(req.params.id)
    .then(album => res.json(album))
    .catch(err => res.status(404).json({ noalbumfound: 'No album found with that ID' }));
});

router.post('/', (req, res) => {
  const { name, authorId } = req.body;
  const { errors, isValid } = validateAlbumInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findById(authorId)
    .then(user => {
      const connectionCode = user.connectionCode;
      const newAlbum = new Album({ name, authorId, connectionCode });
      newAlbum.save().then(album => res.json(album));
    });
});

router.patch('/:id', (req, res) => {
  Album.findById(req.params.id)
    .then(album => {
      album.name = validText(req.body.name) ? req.body.name : album.name;
      album.authorId = validText(req.body.authorId) ? req.body.authorId : album.authorId;

      album.save().then(album => res.json(album));
    });
});

router.delete('/:id', (req, res) => {
  Album.findById(req.params.id)
    .then(album => {
      album.remove().then(album => res.json(album));
    })
    .catch(err =>
      res.status(404).json({ noalbumfound: 'No album found with that ID' })
    );
});

module.exports = router;

