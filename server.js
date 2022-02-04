const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config();

const recipesController = require('./controllers/recipes');

const { PORT, DATABASE_URI, GOOGLE_CREDENTIALS} = process.env;

mongoose.connect(DATABASE_URI)

const db = mongoose.connection

db.on('connected', () => console.log('Connected to Mongo'))
db.on('disconnected', () => console.log('Disconnected from Mongo')) 
db.on('error', (err) => console.log('Error: ', err))


app.use(cors()); 
app.use(morgan("dev")); 
app.use(express.json()); 

app.use('/recipes/api', recipesController);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))