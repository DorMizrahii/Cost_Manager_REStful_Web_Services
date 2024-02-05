const User = require("../models/userModel");

exports.createUser = async (req, res) => {
    try {
        // Create a new cost item using the request body
        const newUser = new User(req.body);
        await newUser.save();

        // Send a success response with the created cost item
        res.status(201).send({
            message: "User successfully created",
            data: newUser, // Assuming you want to return the created item to the client
        });
    } catch (error) {
        // Send an error response if the creation fails
        res.status(500).send({
            message: "User creation failed",
            error: error.message,
        });
    }
};
