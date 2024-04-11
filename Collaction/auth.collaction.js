const { singupService, isUserExist } = require('../services/auth.service');
const { tryCatch } = require('../utils/tryCatch');

exports.registationCollaction = tryCatch(async (req, res) => {
	const { email } = req.body;

	const user = await isUserExist(email);

	if (user) {
		throw new AppError(
			USER_NOT_FOUND,
			'User Already Have An Account. Pleace Login.',
			USER_NOT_FOUND
		);
	}
	const createUser = await singupService(req.body);
	res.status(200).json({
		success: true,
		status: 200,
		message: 'Usae Create Successfully...',
	});
});
