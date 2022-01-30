// Dependencies
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors")
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const expressSession = require('express-session')
require("dotenv").config();
// Pull PORT && MONGODB_URL
const { PORT, MONGODB_URL, SECRET } = process.env;

// Controllers
const recipesController = require('./controllers/recipes');

// Database Connection
// Establishes Connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
// Connection Events
const db = mongoose.connection
    db.on("open", () => console.log("You are connected to mongoose"));
    db.on("close", () => console.log("You are disconnected from mongoose"));
    db.on("error", (error) => console.log(error)); 

// Middleware
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use(methodOverride('_method'));

// Routes
// test route
app.get("/", (req, res) => {
    res.redirect('/recipes/api');
});
app.use('/recipes/api', recipesController);


// Listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))