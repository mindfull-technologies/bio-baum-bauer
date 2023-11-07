import { StatusCodes } from "http-status-codes";
import Sponsor from "../models/Sponsor.js";

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
      const sponsorId  = req.params.id; 
      
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
    const { sponsorId } = req.params;
    const { firstName, lastName, email, password } = req.body;

    const updatedSponsor = await Sponsor.findOneAndUpdate(
      sponsorId,
      {
        firstName,
        lastName,
        email,
        password,
      },
      { new: true }
    );

    if (!updatedSponsor) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Sponsor not found' });
    }

    return res.status(StatusCodes.OK).json(updatedSponsor);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error', error: error.toString() });
  }
};



  