const jwt = require('jsonwebtoken');
const { USER_NOT_FOUND } = require('../constants/errorCode');

exports.verifyToken = async (req, res, next) => {
	try {
		const token = req.cookies.token;

		// const token = req.headers?.authorization?.split(' ')[1];
		
		if (token === undefined) {
			const error = {
				statusCode: USER_NOT_FOUND,
				message: 'You Are Not Logged In.',
			};
			return next(error);
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decoded;
		next();
	} catch (error) {
		next(error?.message || 'Something Want Wrong.');
	}
};
