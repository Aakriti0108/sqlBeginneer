const productController = require("../controllers/customerProduct")
const router = require("express").Router();

router.get("/getAllProductsByCustomer",productController.getAllProductsByCustomer);
router.get("/getAllCustomerProducts",productController.getAllCustomerByProduct);

module.exports= router;