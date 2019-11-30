var express = require('express');
var router = express.Router();
var servicesCtrl = require('../controllers/services');


//GET/services --> to see the services page with all services listed 
router.get('/services', servicesCtrl.index);

module.exports = router;