const Blog = require('../models/Blog.model');
const jwt = require('jsonwebtoken');

module.exports.getAll = (req, res) => {
    console.log("inside get all");

    Blog.find()
        .then((allblog) => {
            console.log(allblog);
            res.json(allblog);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);

        })
};

module.exports.create = (req, res) => {
    console.log('inside create');
    console.log(req.body);
    validateBlog(req.body);
    	// decode our JWT to get the currently logged in user's _id to add to the new
	//		restaurant document in the collection
	const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
	req.body.UserID = decodedJWT.payload.user_id;
    Blog.create(req.body)
        .then((newBlog) => {
            console.log(newBlog);
            res.json(newBlog);


        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);

        })
};

module.exports.getOne = (req, res) => {
    console.log('inside getOne');
    console.log('looking for id:' + req.params.id);


    Blog.findById(req.params.id)
        .then((oneBlog) => {
            console.log(oneBlog);
            res.json(oneBlog);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);

        })



};

module.exports.update = (req, res) => {
    console.log('inside update');
    console.log('looking for id:' + req.params.id);
    console.log(req.body);

    validateBlog(req.body);


    Blog.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    
        .then((updatedBlog) => {
            console.log(updatedBlog);
            res.json(updatedBlog);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
};


module.exports.delete = (req, res) => {
    console.log('inside delete');
    console.log('looking for id: ' + req.params.id);


    Blog.findByIdAndDelete(req.params.id)
        .then((deletedBlog) => {
            console.log(deletedBlog);
            res.json(deletedBlog);

        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
}

validateBlog = (Blog) => {

};