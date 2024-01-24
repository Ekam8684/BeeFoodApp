const mongoose = require("mongoose")

// schema 
const FoodItemsSchema = mongoose.Schema({
    
}, { timestamps: true })

// model
const FoodItems = mongoose.model('FoodItems', FoodItemsSchema)

module.exports = FoodItems