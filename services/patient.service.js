const PatientModel = require('../Schema/patient.schema');

exports.addPatientService = async (data) => {
	const add = await PatientModel.create(data);
	return add;
};

exports.allPatientService = async () => {
	const get = await PatientModel.find();
	return get;
};

exports.getSinglePatientService = async (id) => {
	const patient = await PatientModel.findOne({ _id: id });

	return patient;
};

exports.deleteSinglePatientService = async (id) => {
	const delet = await PatientModel.deleteOne({ _id: id });
	return delet;
};
