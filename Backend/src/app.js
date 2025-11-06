const express = require('express');
const connectTodb = require('../db/db')
require('dotenv').config()
const productRoute = require('../routes/Productroutes')
const app = express();
connectTodb()
const cartRoute = require('../routes/Cartroutes')

app.use(express.json())
app.use('/api',productRoute )
app.use('/api',cartRoute )


module.exports = app;