var Service = require('../models/service');

module.exports = {
    create, 
};

function create(req, res) {
Service.findById(req.params.id, function(err, service) {
    service.reviews.push(req.body);
    service.save(function(err) {
        res.redirect(`/services/${service._id}`);
    });
  });
}



// function update(req, res) {
// Service.findByIdAndUpdate(req.params.id, {review: } {new: true}, function(err, doc) {
//     console.log(doc);
//     res.redirect(`/services/${service._id}`);
// });
// }

