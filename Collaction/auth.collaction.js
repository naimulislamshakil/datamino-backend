const { USER_NOT_FOUND } = require('../constants/errorCode');
const { singupService, isUserExist } = require('../services/auth.service');

exports.registationCollaction = async (req, res, next) => {
	try {
		const { email } = req.body;

		const user = await isUserExist(email);

		if (user) {
			const error = {
				statusCode: USER_NOT_FOUND,
				message: 'User Already Exist....',
			};
			return next(error);
		}
		const createUser = await singupService(req.body);
		res.status(200).json({
			success: true,
			status: 200,
			message: 'Usae Create Successfully...',
		});
	} catch (error) {
		return next(error);
	}
};
