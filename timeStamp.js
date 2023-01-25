const express = require("express")
const timeStamp = express();

const cors = require("cors");
const bodyParser = require("body-parser");
timeStamp.use(cors());
timeStamp.use(bodyParser.json());

const timeStampRoutes = require("./routes/timeStamp")
const CustomerRoutes = require("./routes/customers")
const ProductRoutes = require("./routes/productofCustomer")

const sequelize = require("./util/database")
const con = require("./util/database1")

timeStamp.use("/api",timeStampRoutes)
timeStamp.use("/customer",CustomerRoutes)
timeStamp.use("/product",ProductRoutes)

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    timeStamp.listen(3000)
  });
//   .then(result=>{
//     timeStamp.listen(3000)
// })
// .catch(err=>{
//     console.log(err)
// })

// sequelize
// .sync()
// //.sync({force:true})
// .then(result=>{
//     timeStamp.listen(3000)
// })
// .catch(err=>{
//     console.log(err)
// })