const ProductsModel = require('../models/Productmodel')

async function Products(req,res){

    try{
        const products = await ProductsModel.find();
        return res.status(200).json({
            message:"all products",
            data: products
        })
    }catch(err){
        return res.status(400).json({
            message:`error ${err}`
        })
    }
}

module.exports = Products;