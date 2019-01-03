const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSignupInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isLength(data.name, {
      min: 2,
      max: 50
    })) {
    errors.name = 'Name must be between 2 and 50 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, {
      min: 6,
      max: 12
    })) {
    errors.password = 'Password must be between 6-12 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};