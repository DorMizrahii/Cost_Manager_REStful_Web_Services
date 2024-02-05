const CostItem = require("../models/costsItemModel");
const User = require("../models/userModel");
const Categories = require("../const");

exports.addCostItem = async (req, res) => {
  try {
    const userExist = await User.findOne({id:req.body.userId});

    if (!userExist) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    // Create a new cost item using the request body
    const newCostItem = new CostItem(req.body);
    await newCostItem.save();

    // Send a success response with the created cost item
    res.status(201).send({
      message: "Cost Item successfully created",
      data: newCostItem, // Assuming you want to return the created item to the client
    });
  } catch (error) {
    // Send an error response if the creation fails
    res.status(500).send({
      message: "Cost Item creation failed",
      error: error.message,
    });
  }
};
exports.getReport = async (req, res) => {
  try {
    const { userId, year, month } = req.query;
    // Ensure the query matches the fields in your database. If your CostItem model uses user_id instead of userId, adjust accordingly.
    const costs = await CostItem.find({ userId, year, month });
    const reports = Categories.reduce((acc, category) => {
      acc[category] = costs.filter(cost => cost.category === category ).map(({day,description,sum})=>({day,description,sum}));
      return acc;
    },{})
    res.status(201).send({
      message: "Report successfully fetched",
      data: reports,
    });
  } catch (error) {
    res.status(400).send({
      message: "Report failed",
      error: error.message,
    });
  }
};
