const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
UserSchema.pre("save", function(next) {
	// encrypt the password BEFORE it is saved to the DB
	// we KNOW that the passwords match already
	console.log("inside pre-save");

	bcrypt.hash(this.Password, 10)
		.then((hashedPassword) => {
			// update the password in this instance to use the hashed returned version
			this.Password = hashedPassword;
			next();
		})
		// .catch((err) => {
		// 	console.log("Error while hashing the password")
		// });
});

module.exports = mongoose.model('User', UserSchema);