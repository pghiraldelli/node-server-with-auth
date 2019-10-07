const express = require('express');
const passport = require('../auth/google/auth-google.js');
const app = express();

app.get('/auth/google',
  passport.authenticate('google'));

module.exports = app;