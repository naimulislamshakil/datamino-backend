const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) return next();

	const pass = this.password;
	const hashPass = bcrypt.hashSync(pass, 10);
	this.password = hashPass
	next()
});

const UserModel = mongoose.model('USER', userSchema);

module.exports = UserModel;
