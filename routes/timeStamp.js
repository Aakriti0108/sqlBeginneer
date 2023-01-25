const timeStamp = require("../controllers/timeStamp")
const router = require("express").Router();

router.post("/create_account_time_Stamp",timeStamp.createTimeStamp);
router.get("/create_account_select_time",timeStamp.getAllTimeStamp);

module.exports=router