const express = require('express');
const recipesRouter = express.Router();
const Recipe = require('../models/recipe')
const recipesArr = require ('../models/recipesArr.json')

// recipesRouter.use(async function(req, res, next) {
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