const  CartModel = require('../models/Cartmodel')
const  ProductModel = require('../models/Productmodel')
//add products
async function addCartitems(req,res) {
  try{
    const {productId, quantity} = req.body;
    if (!productId || !quantity) {
      return res.status(400).json({ message: "productId and quantity required" });
    }

    const cartItem = await CartModel.create({productId,quantity})
    return res.status(200).json({
        message:"cart items addded",
        cartItem
    })
  }
  catch(err){
    return res.status(400).json({
        message:`err ${err}`,
        
    })
  }
}

//Delete products
async function deleteproduct(req,res){
  try{
    const {id} = req.params;
    const deleteproduct = await CartModel.findByIdAndDelete(id);
    if (!deleteproduct) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    return res.status(200).json({
        message:"deleted successfully",
        deleteproduct
    })
  } catch(err){
    return res.status(400).json({
         message:`err${err}`

    })
  }
}

//get total cart
async function getproducts(req,res){
try{
 const cartItems = await CartModel.find().populate('productId','name price')

 if(!cartItems || cartItems.length === 0){
    return res.status(400).json({
        message:"no item in cart",
        items:[],
        total:0
    })
 }

  const total = cartItems.reduce((acc,item)=>{
    return  acc + (item.productId?.price || 0) * item.quantity;
  },0)

 return res.status(200).json({
    message:"cart",
    items: cartItems,
    total,
 })
}catch(err){
    return res.status(400).json({
        message:`err ${err}`
    })
}
}

//checkout
async function  checkout(req,res) {
   try{
    const Items = await CartModel.find().populate('productId', 'price');
    
    if (!Items || Items.length === 0) {
      return res.status(400).json({ message: "Cart is empty. Cannot checkout." });
    }

    const total = Items.reduce((acc,item)=>{
        return acc + (item.productId?.price || 0)* item.quantity;
    })
    
    const receipt = {
    total,
    timestamp: new Date().toISOString(),
    items: Items.map((item) => ({
    name: item.productId?.name,
    price: item.productId?.price,
    quantity: item.quantity,
      })),
    };

    return res.status(200).json({
        messgae:"checkout",
    
        receipt
    })
   }catch(err){

   } 

    
}

module.exports = {addCartitems,deleteproduct,getproducts,checkout};