const { registationCollaction } = require('../../Collaction/auth.collaction');
const { userRegistationValidation } = require('../../utils/userValidation');

const route = require('express').Router();

route.post('/singup', userRegistationValidation, registationCollaction);

module.exports = route;
