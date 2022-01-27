const express = require('express');
const recipesRouter = express.Router();
const Recipe = require('../models/recipe')

// test route
recipesRouter.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = recipesRouter;