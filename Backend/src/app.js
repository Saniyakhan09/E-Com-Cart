const express = require('express');
const connectTodb = require('../db/db')
require('dotenv').config()
const productRoute = require('../routes/Productroutes')
const cartRoute = require('../routes/Cartroutes')
const cors = require('cors')
const app = express();
connectTodb()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true                
}));
app.use(express.json())
app.use('/api',productRoute )
app.use('/api',cartRoute )


module.exports = app;