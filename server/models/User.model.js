const UserSchema = mongoose.Schema({
    Name :{
        type: String,
        required: [true, 'A Name is required'],
        minLength:[4, 'A Name must be at least 4 characters long']
    },
        Email :{
        type: String,
        required: [true, 'A Email is required'],
        minLength:[6, 'A Email must be at least 6 characters long']
    },
    Password:{
        type: String,
        required: [true, 'A Password is required'],
        minLength:[6, 'A Password must be at least 6 characters long']
    },


})

module.exports = mongoose.model('User', UserSchema);