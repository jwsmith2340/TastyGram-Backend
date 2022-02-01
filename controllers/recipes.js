const express = require('express');
const recipesRouter = express.Router();
const Recipe = require('../models/recipe')


// recipesRouter.use(async function(req, res, next) {
//     try {
//         const token = req.get('Authorization');
//         if(!token) return next();
//         console.log(token)

//         const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''));
//         if(!user) throw new Error('something went wrong');

//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });


// function isAuthenticated(req, res, next) {
//     if(!req.user) return res.status(401).json({message: 'you must be logged in first'})
//     next();
// }

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