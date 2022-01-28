const express = require('express');
const recipesRouter = express.Router();
const Recipe = require('../models/recipe')

// test route
// recipesRouter.get("/", (req, res) => {
//     res.send("Hello World");
// });

// Recipe Index Route
recipesRouter.get("/", async (req, res) => {
    try {
        // send all recipes
        res.json(await Recipe.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Recipe Create Route
recipesRouter.post("/", async (req, res) => {
    try {
        // send all recipes
        res.json(await Recipe.create(req.body));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

module.exports = recipesRouter;