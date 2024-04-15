const {
	registationCollaction,
	loginCollaction,
} = require('../../Collaction/auth.collaction');
const { userRegistationValidation } = require('../../utils/userValidation');

const route = require('express').Router();

route.post('/singup', userRegistationValidation, registationCollaction);
route.post('/login', loginCollaction);
module.exports = route;
