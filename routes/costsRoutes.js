const express = require("express");
const router = express.Router();
const costController = require("../controllers/costController");

router.post("/addcost", costController.addCostItem);
router.get("/report", costController.getReport);

module.exports = router;
