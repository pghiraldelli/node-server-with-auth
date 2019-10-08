const express = require('express');
const passport = require('../auth/google/auth-google.js');
const app = express();

app.use(passport.initialize());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
      successRedirect: 'https://www.example.com',
      failureRedirect: 'https://www.example.com/fail'
}));

module.exports = app;