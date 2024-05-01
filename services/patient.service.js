const PatientModel = require('../Schema/patient.schema');

exports.addPatientService = async (data) => {
	const add = await PatientModel.create(data);
	return add;
};
