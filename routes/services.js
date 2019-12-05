var express = require('express');
var router = express.Router();
var servicesCtrl = require('../controllers/services');


//GET/services --> to see the services page with all services listed 
router.get('/', isLoggedIn, servicesCtrl.index);
//GET/services/:id --> see details for each services 
router.get('/:id', servicesCtrl.show);
//creates review
router.post('/:id/reviews', servicesCtrl.create);
//edit reviews for a service
router.get('/:serviceid/reviews/:reviewid/edit', servicesCtrl.editReview);
//update reviews for a service
router.put('/:serviceid/reviews/:reviewid/update', servicesCtrl.updateReview);
//delete a review
router.delete('/:serviceid/reviews/:reviewid', servicesCtrl.deleteReview);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;


