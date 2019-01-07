const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAlbumInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';

  if (!Validator.isLength(data.name, { min: 1, max: 140 })) {
    errors.name = 'Album name must be between 1 and 140 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Album name field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};