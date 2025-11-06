const mongoose = require('mongoose')
const ProductsModel = require('../models/Productmodel')

async function connectTodb(){
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("Connected to MongoDB");


    
    const count = await ProductsModel.countDocuments();
    if (count === 0) {
      await ProductsModel.insertMany([
        { name: "Laptop", price: 999 },
        { name: "Keyboard", price: 49 },
        { name: "Mouse", price: 25 },
        { name: "Headphones", price: 79 },
        { name: "Charger", price: 39 },
      ]);
      console.log(" Products seeded successfully");
    }

    }catch(err){
       console.log(err)
    }
}

module.exports = connectTodb;
