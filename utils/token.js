const jwt = require('jsonwebtoken');

exports.generateToken = (email, id, roll = 'Patient') => {
	// console.log({ email, id, roll });
	const token = jwt.sign({ email, id, roll }, process.env.JWT_SECRET, {
		expiresIn: '1h',
	});
	return token;
};
