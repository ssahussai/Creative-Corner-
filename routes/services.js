var express = require('express');
var router = express.Router();
var servicesCtrl = require('../controllers/services');


//GET/services --> to see the services page with all services listed 
router.get('/', servicesCtrl.index);
//GET/services/:id --> see details for each services 
router.get('/:id', servicesCtrl.show);
//edit reviews for a service
router.get('/:serviceid/reviews/:reviewid/edit', servicesCtrl.editReview);
//update reviews for a service
router.post('/:serviceid/reviews/:reviewid/update', servicesCtrl.updateReview);


module.exports = router;