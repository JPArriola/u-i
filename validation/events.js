const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 1, max: 140 })) {
    errors.title = 'Title must be between 1 and 140 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};