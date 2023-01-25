const CustomerServices = require("../services/customer")

exports.getAllCustomers = async(req,res)=>{
try{
  let result = await CustomerServices.getAllcustomers()
  res.status(201).json({success:true,data:result})
}
catch(err){
res.status(500).json(err)
}
}

exports.postAllCustomers = async(req,res)=>{
  try{
    
    let result = await CustomerServices.postAllcustomers(req)
    res.status(201).json({success:true,data:result})
  }
  catch(err){
  res.status(500).json(err)
  }
  }

  exports.deleteAllCustomers = async(req,res)=>{
    try{
      
      let result = await CustomerServices.deleteAllcustomers(req)
      res.status(201).json({success:true,data:result})
    }
    catch(err){
    res.status(500).json(err)
    }
    }

    exports.updateAllCustomers = async(req,res)=>{
      try{
        const {id} = req.query;
        const {name,phone,product_id} = req.body;
        let result = await CustomerServices.updateAllcustomers(id,name,phone,product_id)
        res.status(201).json({success:true,data:result})
      }
      catch(err){
      res.status(500).json(err)
      }
      }