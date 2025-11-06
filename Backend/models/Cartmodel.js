const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    productId:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required: true,

    },
    quantity:{
        type:Number,
        required: true,

    }
})

const CartModel = mongoose.model('cart',CartSchema)

module.exports =  CartModel;