const joi = require('joi');

exports.patientValidation = (req, res, next) => {
	const schema = joi.object({
		email: joi.string().required(),
		name: joi.string().required(),
		date: joi.string().required(),
		image: joi.string().required(),
		address: joi.string().required(),
		gender: joi.string().required(),
		emergancy: joi.string().required(),
		phone: joi.string().required(),
	});

	const { error, value } = schema.validate(req.body);

	if (error) {
		return next(error);
	}

	next();
};
