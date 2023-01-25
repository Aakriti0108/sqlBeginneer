const productServices = require("../services/product");
const customerProductsServices = require("../services/customer_product");
const customerServices = require("../services/customer");

exports.getAllProductsByCustomer = async(req,res)=>{
    try{
      let customer_id = req.query.customer_id;
      let products_mappings = await customerProductsServices.getAllcustomers_productsByCustomerId(customer_id);
      //  console.log(products_mappings,"products_mappings");
      let products = [];
      for(let i=0;i<products_mappings.length;i++){
        let product = await productServices.getProductById(products_mappings[i].product_id);
        //  console.log(product);
        products.push(product);
      }

       res.status(201).json({success:true,data:products})
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.getAllCustomerByProduct = async(req,res)=>{
  try{
    let product_id = req.query.product_id;
    let customers_mappings = await customerProductsServices.getAllproducts_customersByproductId(product_id);
    // console.log(customers_mappings);
    let products = [];
    for(let i=0;i<customers_mappings.length;i++){
      let product = await customerServices.getCustomerById(customers_mappings[i].customer_id);
      //  console.log(product);
      products.push(product);
    }

    res.status(201).json({success:true,data:products})
  }
  catch(err){
      res.status(500).json(err)
  }
}