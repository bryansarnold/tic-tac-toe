'use strict';

const app = require('./app-data');

const signUp = (success, failure, form) => {
  $.ajax({
    METHOD: 'POST',
    url: app.api + '/sign-up',
    data,
  }).done(success)
  .fail(failure);
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
};

const signIn = (success, failure, form) => {
  $.ajax({
    METHOD: 'POST',
    url: app.api + '/sign-up',
    data,
  }).done(success)
  .fail(failure);
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
};

const signOut = (success, failure) => {
  $.ajax({
    METHOD: 'DELETE',
    url: app.api + '/sign-out' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(success)
  .fail(failure);
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
};


module.exports = {
  signUp,
  signIn,
  signOut
};
