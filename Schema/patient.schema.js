const mongoose = require('mongoose');
const schema = mongoose.Schema;

const patientSchema = new schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		emergancy: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const PatientModel = mongoose.model('Patient', patientSchema);

module.exports = PatientModel;
