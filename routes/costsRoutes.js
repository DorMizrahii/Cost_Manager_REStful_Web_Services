const express = require("express");
const router = express.Router();
const {getAllDevelopers, createDeveloper} = require("../controllers/developerController");
const {createUser} = require("../controllers/userController");
const {getReport, addCostItem} = require("../controllers/costController");


router.post("/addcost", addCostItem);
router.get("/report", getReport);
router.post("/createUser",createUser);
router.post("/createDeveloper",createDeveloper);
router.get("/about",getAllDevelopers);


module.exports = router;
