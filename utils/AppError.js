class AppError extends Error {
	constructor(errorCode, message, statusCode) {
		super(message);
		this.errorCode = errorCode;
		this.statusCode = statusCode;
		this.message = message;
	}
}

module.exports = AppError;
