exports.tryCatch = (controller) => async (req, res, next) => {
	try {
		controller(req, res);
	} catch (error) {
		return next(error);
	}
};
