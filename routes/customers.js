const customer = require("../controllers/customer")
const router = require("express").Router();

router.get("/get_information",customer.getAllCustomers)
router.post("/post_information",customer.postAllCustomers)
router.delete("/delete_information",customer.deleteAllCustomers)
router.put("/update_information",customer.updateAllCustomers)

module.exports=router