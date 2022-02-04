const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    ingredients: String,
    key: String
}, {timestamps: true});

module.exports = mongoose.model('Recipe', recipeSchema);