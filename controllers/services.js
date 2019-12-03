var Service = require('../models/service');

module.exports = {
    index,
    show,
    editReview
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
Service.findById(req.params.id).exec(function(err, service) {
    res.render('services/show', {
        title: 'Service Details', 
        service,
        user: req.user
    });
});
}

function editReview(req, res) {
    Service.findById(req.params.serviceid, function(err, service) {
        const review = service.reviews.id(req.params.reviewid)
        res.render('services/update', {title: "Update Review", user: req.user, review, service })
    })
}

