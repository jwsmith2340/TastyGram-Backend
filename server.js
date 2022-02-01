// Dependencies
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors")
const mongoose = require("mongoose")
const admin = require("firebase-admin");

const methodOverride = require('method-override')
const expressSession = require('express-session')
require("dotenv").config();
// Pull PORT && MONGODB_URL
const { PORT, MONGODB_URL, GOOGLE_CREDENTIALS } = process.env;



const serviceAccount = JSON.parse(GOOGLE_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


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

// app.use(async function(req, res, next) {
//     try{
//         const token = req.get('Authorization');
//         if(!token) return next();

//         const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''));
//         if(!user) throw new Error('Something went wrong');

//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });


// function isAuthenticated(req, res, next) {
//     if(!req.user) return res.status(401).json({message: 'You must be logged in first'})
//     next();
// }


// Routes
// test route
app.get("/", (req, res) => {
    res.redirect('/recipes/api');
});
app.use('/recipes/api', recipesController);


// Listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
