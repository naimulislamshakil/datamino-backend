const AppError = require('./AppError');

const errorHandler = (err, req, res, next) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			errorCode: err.errorCode,
			errorMessage: err.message,
		});
	}
	return res.status(500).send(err.message);
};

module.exports = errorHandler;
