const mongoose = require("mongoose");
const validCategories = require("../const");

const costItemSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: [true, "Cost item must include a user ID!"],
  },

  year: {
    type: Number,
    required: [true, "Cost item must include a year!"],
  },

  month: {
    type: String,
    required: [true, "Cost item must include a month!"],
  },

  day: {
    type: Number,
    required: [true, "Cost item must include a day!"],
  },
  id: {
    type: Number,
  },

  description: {
    type: String,
    required: [true, "Cost item must include a description!"],
  },

  category: {
    type: String,
    required: [true, "Cost item must include a category!"],
    validate: {
      validator: function (value) {
        return validCategories.includes(value);
      },
      message: (props) => `${props.value} is not a valid category!`,
    },
  },
  sum: {
    type: Number,
    required: [true, "Cost item must include a sum!"],
  },
});

const CostItem = mongoose.model("Costs", costItemSchema);
module.exports = CostItem;
