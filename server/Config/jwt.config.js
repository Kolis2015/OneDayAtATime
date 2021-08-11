const jwt = require('jsonwebtoken');
const secret = 'pepper';

module.exports = {
	authenticate(req, res, next) {
		jwt.verify(req.cookies.usertoken,
			secret,
		
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