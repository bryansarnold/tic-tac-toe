'use strict';

// const index = require('./bundle.js');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./auth/events.js');

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
});

$('#sign-up').on('submit', function(event) {
  event.preventDefault();
  let form = getFormFields(event.target);
});

$('#sign-in').on('submit', function() {
  event.preventDefault();
  let form = getFormFields(event.target);
});

$('#sign-out').on('submit', function(event) {
  event.preventDefault();
  let form = getFormFields(event.target);
});

// });
//
// module.exports = {
//   index
// };
