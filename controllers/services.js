var Service = require('../models/service');

module.exports = {
    index,
    show,
    create,
    editReview,
    updateReview
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


function create(req, res) {
    Service.findById(req.params.id, function(err, service) {
        service.reviews.push(req.body);
        service.save(function(err) {
            res.redirect(`/services/${service._id}`);
        });
    });
}


function editReview(req, res) {
    Service.findById(req.params.serviceid, function(err, service) {
        const review = service.reviews.id(req.params.reviewid);
        console.log(review)
        res.render('services/updateReview', {
            title: "Update Review", 
            user: req.user, 
            review, 
            service 
        });
    });
}


function updateReview(req, res) {
    Service.findById(req.params.serviceid, function(err, service) {
        const review = service.reviews.id(req.params.reviewid);
        review.set(req.body);
        service.save(function(err) {
            res.redirect(`/services/${req.params.serviceid}`);
        });
    });
}