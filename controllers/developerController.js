const Developer = require("../models/developerModel");
const User = require("../models/userModel");

exports.createDeveloper = async (req, res) => {
    try {
        // Create a new developer using the request body
        const newDeveloper = new Developer(req.body);
        await newDeveloper.save();

        // Send a success response with the created developer
        res.status(201).send({
            message: "Developer successfully created",
            data: newDeveloper,
        });
    } catch (error) {
        // Send an error response if the creation fails
        res.status(500).send({
            message: "Developer creation failed",
            error: error.message,
        });
    }
};

exports.getAllDevelopers = async (req,res) =>{
    let message = "";
    try{
        const AllDevelopers = await Developer.find();

        if(!AllDevelopers)
            message = "No developers found!";
        else
            message = "Developers fetched successfully";

        res.status(201).send({
            message,
            data: AllDevelopers,
        });
    }
    catch(error){
        res.status(500).send({
            message: "Developers fetch failed",
            error: error.message,
        });
    }
}
