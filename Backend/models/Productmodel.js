const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name:String,
    price:Number,

})


const ProductsModel = mongoose.model('Products',productsSchema)

module.exports = ProductsModel;