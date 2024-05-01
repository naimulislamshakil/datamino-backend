const { addPatientService } = require('../services/patient.service');

exports.addPatientCollaction = async (req, res, next) => {
	try {
		const addPatient = await addPatientService(req.body);
		if (addPatient) {
			res.status(200).json({
				success: true,
				status: 200,
				message: 'Patient Add Successfully...',
			});
		}
	} catch (error) {
		next(error);
	}
};
