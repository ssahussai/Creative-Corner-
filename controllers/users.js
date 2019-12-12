const User = require('../models/user'); // User is never used here

module.exports = {
    index
};

function index(req, res, next) {
    res.render('index', {
        user: req.user,
        name: req.query.name
    });
}