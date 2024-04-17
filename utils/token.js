const jwt = require('jsonwebtoken');

exports.generateToken = (email, id, roll = 'user') => {
	// console.log({ email, id, roll });
	const token = jwt.sign({ email, id, roll }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});
	return token;
};
