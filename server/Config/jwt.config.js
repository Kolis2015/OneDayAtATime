const jwt = require('jsonwebtoken');

module.exports = {
	authenticate(req, res, next) {
		jwt.verify(req.cookies.usertoken,
			process.env.JWT_SECRET,
		
			(err, payload) => {
				if(err) {
					// this is not a valid token OR the cookie doesn't exist
					res.status(401).json({ verified: false });
				} else {
					// err is null, so it verified correctly
					console.log("All good to proceed");
					next();
				}
			}
			)

	}
}