const mongoose = require("mongoose")
const schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    ingredients: String,
}, {timestamps: true});

module.exports = mongoose.model('Recipe', recipeSchema);

       

