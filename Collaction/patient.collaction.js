const {
	addPatientService,
	allPatientService,
	getSinglePatientService,
	deleteSinglePatientService,
} = require('../services/patient.service');

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

exports.getAllPatientCollaction = async (req, res, next) => {
	try {
		const allPatient = await allPatientService();

		if (allPatient) {
			res.status(200).json({
				success: true,
				status: 200,
				patients: allPatient,
			});
		}
	} catch (error) {
		next(error);
	}
};

exports.getSinglePatientCollaction = async (req, res, next) => {
	try {
		const { id } = req.params;

		const getSinglePatient = await getSinglePatientService(id);

		if (getSinglePatient) {
			res.status(200).json({
				success: true,
				status: 200,
				patients: getSinglePatient,
			});
		}
	} catch (error) {
		next(error);
	}
};

exports.deleteSinglePatientCollaction = async (req, res, next) => {
	try {
		const { id } = req.params;

		const deleteSinglePatient = await deleteSinglePatientService(id);

		if (deleteSinglePatient.deletedCount === 1) {
			res.status(200).json({
				success: true,
				status: 200,
				message: 'Patient Deleted Successfuly!',
			});
		}
	} catch (error) {
		next(error);
	}
};
