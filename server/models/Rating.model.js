const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
    Link :{
        type: String,
        required: [true, 'A Link is required'],
        
    },
        Rating :{
        type: Number,
        required: [true, 'A Rating is required'],
        min: [1, 'A rating must be between 1 and 5.'],
        max: [5, 'A rating must be between 1 and 5.']
    },
    UserID: {
        type: String,
        required: [true, 'A UserID is required'],
        minLength:[4, 'A UserID must be at least 4 characters long']
    },


})

module.exports = mongoose.model('Rating', RatingSchema);