'use strict';

const loginSuccess = (data) => {
  // app.user = data;
  console.log("success");
};

const loginFail = (error) => {
  console.log("Login unsuccessful");
};

const logoutSuccess = (data) => {
  // app.user = data;
  console.log("success");
};

const logoutFail = (error) => {
  console.log("Logout unsuccessful");
};

const signInSuccess = (data) => {
  // app.user = data;
  console.log("success");
};

const signInfail = (error) => {
  console.log("Sign in unsuccessful");
};

const changePasswordSuccess = (data) => {
  // app.user = data;
  console.log("success");
};

const changePasswordfail = (error) => {
  console.log("Password change unsuccessful");
};

module.exports = {
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail,
  signInSuccess,
  signInfail,
  changePasswordSuccess,
  changePasswordfail
};
