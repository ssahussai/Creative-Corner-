var express = require('express');
var router = express.Router();
var servicesCtrl = require('../controllers/services');


//GET/services --> to see the services page with all services listed 
router.get('/', servicesCtrl.index);
//GET/services/:id --> see details for each services 
router.get('/services/:id', servicesCtrl.show);

module.exports = router;