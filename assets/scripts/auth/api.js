'use strict';

const app = require('./app-data.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data
  }).done(success).fail(failure);
};


const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data,
    // ? use the back slash or not on sign-in
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  console.log("Sign out confirmed");
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    //why place a comma after curly braces
  }).done(success)
  .fail(failure);
};

const changePassword = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id, data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
      // ? what is up with the token-token thing
    }
  }).done(success)
  .fail(failure);
};


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
};
