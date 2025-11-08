const mongoose = require('mongoose')
const ProductsModel = require('../models/Productmodel')

async function connectTodb(){
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("Connected to MongoDB");
await ProductsModel.deleteMany({});
await ProductsModel.insertMany([
  { name: "Laptop", price: 999 },
  { name: "Keyboard", price: 49 },
  { name: "Mouse", price: 25 },
  { name: "Headphones", price: 79 },
  { name: "Chain", price: 39 },
  { name: "Watch", price: 25 },
  { name: "Phone", price: 79 },
  { name: "Tab", price: 39 },
]);
console.log(" 8 products added freshly");


    }catch(err){
       console.log(err)
    }
}

module.exports = connectTodb;
