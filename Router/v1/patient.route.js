const { addPatientCollaction } = require('../../Collaction/patient.collaction');
const { verifyToken } = require('../../Meddleware/verifyToken');
const { patientValidation } = require('../../utils/patientValidation');

const router = require('express').Router();

router.post(
	'/addPatient',
	verifyToken,
	patientValidation,
	addPatientCollaction
);

module.exports = router;
