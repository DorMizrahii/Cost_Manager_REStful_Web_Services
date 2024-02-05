const CostItem = require("../models/costsItemModel");
const User = require("../models/userModel");

exports.addCostItem = async (req, res) => {
  try {
    console.log(req.body.userId);
    const userExist = await User.findOne({ _id: req.body.userId });
    console.log(userExist);

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
    const costs = await CostItem.find({ userId, year, month });
    const reports = costs.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category] = acc[item.category].push({
        day: item.day,
        description: item.description,
        sum: item.sum,
      });

      return acc;
    }, {});

    res.status(201).send({
      message: "Report successfully fetched",
      data: reports, // Assuming you want to return the created item to the client
    });
  } catch (error) {
    res.status(400).send({
      message: "Report failed",
      error: error, // TO CHANGE LATER
    });
  }
};
