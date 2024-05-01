const Joi = require('joi');

exports.userRegistationValidation = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(8).max(16).alphanum().required(),
		// roll: Joi.string().required(),
	});

	const { error, value } = schema.validate(req.body);
	if (error) {
		return next(error);
	}

	next();
};
