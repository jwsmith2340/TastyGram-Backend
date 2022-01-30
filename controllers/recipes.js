const express = require('express');
const recipesRouter = express.Router();
const Recipe = require('../models/recipe')
const recipesArr = require ('../models/recipesArr.json')

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

recipesRouter.get("/", (req, res) => {
    res.json(recipesArr);
})

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

// Recipe Delete Route
recipesRouter.delete("/:id", async (req, res) => {
    try {
        // send all recipes
        res.json(await Recipe.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Recipe Update Route
recipesRouter.put("/:id", async (req, res) => {
    try {
        // send all recipes
        res.json(await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

module.exports = recipesRouter;