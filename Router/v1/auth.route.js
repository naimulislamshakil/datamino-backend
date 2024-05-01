const {
	registationCollaction,
	loginCollaction,
	persistentCollaction,
	logoutCollaction,
} = require('../../Collaction/auth.collaction');
const { verifyToken } = require('../../Meddleware/verifyToken');
const { userRegistationValidation } = require('../../utils/userValidation');

const route = require('express').Router();

route.post('/singup', userRegistationValidation, registationCollaction);
route.post('/login', loginCollaction);
route.get('/persistent', verifyToken, persistentCollaction);
route.get('/logout', logoutCollaction);
module.exports = route;
