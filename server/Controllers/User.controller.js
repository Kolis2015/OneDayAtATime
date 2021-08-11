const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'pepper';

module.exports.create = (req, res) => {
    console.log('inside create');
    console.log('req.body');
    User.create(req.body)
        .then((newUser) => {
            console.log(newUser);
            res.json(newUser);


        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);

        })
};

module.exports.login = (req, res) => {
    console.log('inside login');
    console.log('req.body');

    User.findOne({ Email: req.body.Email })
        .then((userRecord) => {
            // check if this returned object is null
            if (userRecord === null) {
                // email not found in the collection / DB
                res.status(400).json({ message: "Email not found. Would you like to sign up?" });
            } else {
                // the username was found
                // compare the password given to us in the request with the one stored in the DB
                bcrypt.compare(req.body.Password, userRecord.Password)
                    .then((isPasswordValid) => {
                        if (isPasswordValid) {
                            console.log("password is valid");
                            console.log(userRecord);
                            console.log(secret);
                            res.cookie("usertoken", // name of the cookie
                                jwt.sign({
                                    // payload is the data I want to save
                                    user_id: userRecord._id,
                                    name: userRecord.Name
                                },
                                    secret), // used to sign / hash the data in the cookie
                                {
                                    // configuration settings for this cookie
                                    httpOnly: true,
                                    expires: new Date(Date.now() + 900000)
                                }
                            )
                                .json({
                                    message: "Successfully logged in",
                                    userLoggedIn: userRecord.username
                                })

                        } else {
                            // passwords didn't match
                            res.status(400).json({ message: "Incorrect password" });
                        }
                    })
                    .catch((err) => {
                        console.log("error with compare pws: " + err)
                        res.status(400).json({ message: "Invalid Login Attempt" });
                    })
            }
        })
        .catch((err) => {
            console.log("error with find one")
            res.status(400).json({ message: "Invalid Login Attempt" });
        })
};

module.exports.logout = (req, res) => {
    console.log("logging out!");
    res.clearCookie("usertoken");  // same name as above for saving the cookie
    res.json({
        message: "You have successfully logged out",
    })
}