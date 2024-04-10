const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./utils/errorHandler');
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

mongoose
	.connect('mongodb://localhost:27017', {})
	.then(() => console.log('Database is connected successfully'))
	.catch((e) => console.log(e));

app.get('/', (req, res) => {
	res.send('<h1>How are you?</h1>');
});

app.use('*', (req, res, next) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
	next(`${baseUrl} Not Found!`);
});

app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is running port: ${port}`);
});
