var Service = require('../models/service');

module.exports = {
    index,
    show
}

function index(req, res) {
Service.find({}, function(err, services) {
    res.render('services/index', { 
        title: 'All Services', 
        services,
        user: req.user
     });
});
}

function show(req, res) {
Service.findById(req.params.id).exec(function(err, services) {
    res.render('services/show', {
        title: 'Service Details', 
        services,
        user: req.user
    });
});
}

