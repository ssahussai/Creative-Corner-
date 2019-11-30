var Service = require('../models/service');

module.exports = {
    index
}

function index(req, res) {
Service.find({}, function(err, services) {
    res.render('services/index', { title: 'All Services', services });
});
}