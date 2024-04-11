const UserModel = require('../Schema/auth.schema');

exports.singupService = async (data) => {
	const user = UserModel.create(data);
	return user;
};

exports.isUserExist = async (email) => {
	const isUser = await UserModel.findOne({ email });
	return isUser;
};
