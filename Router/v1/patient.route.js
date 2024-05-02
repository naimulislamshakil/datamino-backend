const {
	addPatientCollaction,
	getAllPatientCollaction,
	getSinglePatientCollaction,
	deleteSinglePatientCollaction,
} = require('../../Collaction/patient.collaction');
const { verifyToken } = require('../../Meddleware/verifyToken');
const { patientValidation } = require('../../utils/patientValidation');

const router = require('express').Router();

router.get('/getAllPatient', getAllPatientCollaction);
router.get('/getSinglePatient/:id', getSinglePatientCollaction);
router.post(
	'/addPatient',
	verifyToken,
	patientValidation,
	addPatientCollaction
);
router.delete('/deleteSinglePatient/:id', deleteSinglePatientCollaction);

module.exports = router;
