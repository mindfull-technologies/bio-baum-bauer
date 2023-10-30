import User from "../Models/User.js";

export const getAllUsers = (req, res) => {
    return res.status(200).send("all users are here")
}

