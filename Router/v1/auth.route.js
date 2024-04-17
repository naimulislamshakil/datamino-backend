const {
	registationCollaction,
	loginCollaction,
	persistentCollaction,
} = require('../../Collaction/auth.collaction');
const { verifyToken } = require('../../Meddleware/verifyToken');
const { userRegistationValidation } = require('../../utils/userValidation');

const route = require('express').Router();

route.post('/singup', userRegistationValidation, registationCollaction);
route.post('/login', loginCollaction);
route.get('/persistent', verifyToken, persistentCollaction);
module.exports = route;
