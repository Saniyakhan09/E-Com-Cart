const express = require('express')
const productRoute = express.Router();
const Productcontroller = require('../controller/Productcontroller')

productRoute.get('/products',Productcontroller)

module.exports = productRoute;