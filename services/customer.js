const con = require("../util/database1");
const projectUtil = require("../util/project")
const table = "myproducts.customers";

exports.getAllcustomers = async function(){
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

exports.postAllcustomers = async function(req){
  try{
    return new Promise((resolve,reject)=>{
       con.connect(function(err) {
        console.log(req)
           if (err) throw err;
           const {id,name,phone,product_id} = req.body;
          //  var query = 'INSERT INTO myproducts.customers (id,name,phone) Values('+id+',"'+name+'",'+phone+')';
          //  console.log(query);
           con.query(`INSERT INTO ${table} (id,name,phone,product_id) Values('${id}','${name}','${phone}','${product_id}')`, function (err, result, fields) {
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

exports.deleteAllcustomers = async function(req){
  try{
    return new Promise((resolve,reject)=>{
       con.connect(function(err) {
           if (err) throw err;
           const {id} = req.query;
           con.query(`DELETE FROM ${table} where id='${id}' `, function (err, result, fields) {
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

exports.updateAllcustomers = async function(id,name,phone,product_id){
  try{
    name = projectUtil.skipCharacter(name);
    phone = projectUtil.skipCharacter(phone);
    return new Promise((resolve,reject)=>{
       con.connect(function(err) {
           if (err) throw err;
           const sql = `UPDATE ${table} SET name='${name}',phone='${phone}',product_id='${product_id}'  WHERE id='${id}'`;
          //  con.query(`UPDATE ${table} SET name=?,phone=?  WHERE id=? `,[name,phone,id], function (err, result, fields) {
            con.query(sql, function (err, result, fields) {
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

exports.getCustomerById = async function(id){
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