const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "Developer property must include ID!"],
    },
    firstName: {
        type: String,
        required: [true, "Developer property must include first name!"],
    },
    lastName: {
        type: String,
        required: [true, "Developer property must include last name!"],
    },
    email: {
        type: String,
        required: [true, "Developer property must include email!"],
    },
});

const Developer = mongoose.model("Developer", developerSchema);
module.exports = Developer;
