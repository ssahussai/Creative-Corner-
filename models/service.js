var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);