const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    UserID:{
        type: String,
        required: [true, 'A UserID is required'],
        minLength:[4, 'A UserID must be at least 4 characters long']
    },
    Title:{
        type: String,
        required: [true, 'A title is required'],
        minLength:[4, 'A title must be at least 4 characters long']
    },
    Text:{
        type: String,
        required: [true, 'A text is required'],
        minLength:[12, 'A text must be at least 12 characters long']
    },


})

module.exports = mongoose.model('Blog', BlogSchema);