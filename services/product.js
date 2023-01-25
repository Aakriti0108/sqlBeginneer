const con = require("../util/database1")
const table ="myproducts.product";

exports.getAllProducts = async function(){
    try{
      return new Promise((resolve,reject)=>{
         con.connect(function(err) {
             if (err) throw err;
             con.query(`SELECT * FROM ${table}`, function (err, result, fields) {
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

 exports.getProductById = async function(id){
    try{
      return new Promise((resolve,reject)=>{
         con.connect(function(err) {
             if (err) throw err;
             con.query(`SELECT * FROM ${table} where id='${id}'`, function (err, result, fields) {
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