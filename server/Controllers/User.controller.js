const User = require('../model/User.model');


module.exports.create = (req, res) => {
    console.log('inside create');
    console.log('req.body');
    validateUser(req.body);
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

    validateUser(req.body);

    User.find({ Name: req.params.name, Password: req.params.password }) // TODO: don't pass passwords in URL
        .then((users) => {
            console.log(users);
            if (users.length > 0) {
                res.json(users[0]);
            }
            else {
                res.json("Login failed. Do you need to create an account?");
            }
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}

