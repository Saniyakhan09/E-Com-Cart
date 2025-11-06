const express =require('express')
const cartRoute = express.Router();
const cartController = require('../controller/Cartcontroller')

cartRoute.post('/cart/product',cartController.addCartitems)
cartRoute.delete('/delete/cart/:id',cartController.deleteproduct)
cartRoute.get('/cart',cartController.getproducts)
cartRoute.post('/checkout',cartController.checkout)


module.exports = cartRoute;


