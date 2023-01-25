const Sequelize = require("sequelize")
const sequelize = require("../util/database")

const selectTime =  sequelize.define('create_account_select_time',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    value:{
        type:Sequelize.STRING
    }
})

module.exports = selectTime