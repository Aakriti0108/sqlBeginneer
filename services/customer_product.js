const con =  require("../util/database1")
const table = "myproducts.customer_products";

exports.getAllcustomers_productsByCustomerId = async function(customer_id){
    try{
      return new Promise((resolve,reject)=>{
         con.connect(function(err) {
             if (err) throw err;
             con.query(`SELECT * FROM ${table} where customer_id='${customer_id}'`, function (err, result, fields) {
               if (err) throw err;
               resolve(result)
               console.log(result);
             });
           });
      })
    }
    catch(err){
     console.log(err)
     return new Promise ((resolve,reject)=>{
         reject(err)
     })
    }
 }

 exports.getAllproducts_customersByproductId = async function(product_id){
    try{
      return new Promise((resolve,reject)=>{
         con.connect(function(err) {
             if (err) throw err;
             con.query(`SELECT * FROM ${table} where product_id='${product_id}'`, function (err, result, fields) {
               if (err) throw err;
               resolve(result)
               console.log(result);
             });
           });
      })
    }
    catch(err){
     console.log(err)
     return new Promise ((resolve,reject)=>{
         reject(err)
     })
    }
 }