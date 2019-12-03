var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    } 
}, {
    timestamps: true
});

var serviceSchema = new Schema({
    service: {
        type: String,
        enum: ['Tattoo', 'Portrait', 'Henna', 'Decor'],
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 9999
    },
    image: {
        type: String
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);