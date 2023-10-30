import { StatusCodes } from "http-status-codes";
import Sponsor from "../Models/Sponser";

//get the list of sponsors
export const getAllSponsors = async (req, res) => {
  try {
    const sponsers = await Sponsor.find();
    return res.status(StatusCodes.OK).json(sponsers);
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: error.toString() });
  }
};

//create a new sponsor
export const createSponsor = async (req, res) => {
  try {
    const newSponsor = await Sponsor.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(StatusCodes.OK).json({message: 'the new sponsor is created', newSponsor})
  } catch (error) {

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: error.toString()})

  }
};


//delete a sponsor
export const deleteSponsor = async (req, res) => {
    try {
      const { sponsorId } = req.params; 
      
      const deletedSponsor = await Sponsor.findByIdAndDelete(sponsorId);
  
      if (!deletedSponsor) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: "Sponsor not found" });
      }
  
      return res.status(StatusCodes.OK).json({ message: "Sponsor deleted successfully" });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error", error: error.toString() });
    }
  };
  

//update sponsor's info

export const updateSponsor = async (req, res) => {
    try {
      const { sponsorId } = req.params; // Assuming you're passing the sponsor's ID as a parameter
  
      const updatedSponsor = await Sponsor.findByIdAndUpdate(
        sponsorId,
        req.body,
        { new: true } // This option returns the updated document
      );
  
      if (!updatedSponsor) {
        return res.status(404).json({ message: "Sponsor not found" });
      }
  
      return res.status(200).json(updatedSponsor);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error: error.toString() });
    }
  };
  