const Rating = require('../model/Rating.model');

module.exports.getAll = (req, res) => {
    console.log("inside get all");

    Rating.find()
        .then((allrating) => {
            console.log(allRating);
            res.json(allRating);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);

        })
};

module.exports.getAverage = (req, res) => {
    console.log("inside get average");

    Rating.find({link: req.params.link}) // filter to ratings for the particular specified link
        .then((linkRatings) => {
            console.log(linkRatings);

            // compute average rating
            var totalRating = 0;
            var averageRating = 0;
            for (i = 0; i < linkRatings.length; i++) {
                totalRating += linkRatings[i].Rating;
            }
            if (linkRatings.length > 0) {
                averageRating = totalRating / linkRatings.length;
            }

            res.json(averageRating);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);

        })
};

module.exports.create = (req, res) => {
    console.log('inside create');
    console.log('req.body');
    validateRating(req.body);
    Rating.create(req.body)
        .then((newRating) => {
            console.log(newRating);
            res.json(newRating);


        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);

        })
};

module.exports.getOne = (req, res) => {
    console.log('inside getOne');
    console.log('looking for id:' + req.params.id);


    Rating.findById(req.params.id)
        .then((oneRating) => {
            console.log(oneRating);
            res.json(oneRating);
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

    validateRating(req.body);


    Rating.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    
        .then((updatedRating) => {
            console.log(updatedRating);
            res.json(updatedRating);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
};


module.exports.delete = (req, res) => {
    console.log('inside delete');
    console.log('looking for id: ' + req.params.id);


    Rating.findByIdAndDelete(req.params.id)
        .then((deletedRating) => {
            console.log(deletedRating);
            res.json(deletedRating);

        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
}

validateRating = (Rating) => {

};