const express = require('express');
const recipesRouter = express.Router();
const Recipe = require('../models/recipe')

// Recipe Index Route
recipesRouter.get("/", async (req, res) => {
    try {
        res.json(await Recipe.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Recipe Create Route
recipesRouter.post("/", async (req, res) => {
    
    try {
        res.json(await Recipe.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Recipe Delete Route
recipesRouter.delete("/:id", async (req, res) => {
    try {
        res.json(await Recipe.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Recipe Update Route
recipesRouter.put("/:id", async (req, res) => {
    try {
        res.json(await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = recipesRouter;