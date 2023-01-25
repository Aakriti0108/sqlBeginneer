const Sequelize = require("sequelize")
const sequelize = new Sequelize('create_account_select_time','root','',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize