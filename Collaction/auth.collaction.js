const { USER_NOT_FOUND } = require('../constants/errorCode');
const { singupService, isUserExist } = require('../services/auth.service');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/token');

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

exports.loginCollaction = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await isUserExist(email);
		if (!user) {
			const error = {
				statusCode: USER_NOT_FOUND,
				message: 'User Not Exist....',
			};
			return next(error);
		}

		const match = bcrypt.compareSync(password, user.password);

		if (!match) {
			const error = {
				statusCode: USER_NOT_FOUND,
				message: 'Invalid credentials.',
			};
			return next(error);
		}

		const token = generateToken(email, user._id);

		res.status(200).json({
			success: true,
			status: 200,
			message: 'User Successfully Login..',
			token,
		});
	} catch (error) {
		return next(error);
	}
};
