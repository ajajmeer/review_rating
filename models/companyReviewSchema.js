const mongoose = require('mongoose');

let ReviewSchema=new mongoose.Schema({
    companyReviewSubject: {
        type: String,
        require: true,
    },
    companyReview: {
        type: String,
        require: true,
    },
    companyRating: {
        type: String,
        require: true,
    },
    companyCity: {
        type: String,
        require: true,
    },

    isActive: {
        type: String,
        require: true,
    }


})
ReviewSchema.set("timestamps", true);

module.exports = mongoose.model('Review', ReviewSchema)