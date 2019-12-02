var router = require('express').Router();
var passport = require('passport');

/*  home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    user: req.user, 
    title: 'Creative Corner' 
  });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

 // OAuth logout route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

//for contact us page
router.get('/contact', function(req, res) {
  res.render('contact/index', { 
    title: 'Contact Us',
    user: req.user 
  });
});

module.exports = router;
