'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
  $('#sign-up').on('submit', function(event) {
    let data = getFormFields(this);
    event.preventDefault();
    console.log(data);
    authApi.signUp(authUi.loginSuccess, authUi.loginFail, data);
  });

  $('#sign-in').on('submit', function(event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.signInfail, data);
  });
  $('#sign-out').on('submit', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.logoutSuccess, authUi.logoutFail);
  });

  $('#change-password').on('submit', function(event) {
    event.preventDefault();
    authApi.changePassword(authUi.changePasswordSuccess, authUi.changePasswordfail);
  });
};

module.exports = {
  addHandlers
};
