import { StatusCodes } from "http-status-codes";
import Sponsorship from "../models/SponsorShip.js";

//create a new sponsorship
export const createSponsor = async (req, res) => {
  try {
    const { price, certification, location, userId, treeId } = req.body;
    const newSponsorShip = await Sponsor.create({
      price,
      certification,
      location,
      userId,
      treeId,
    });
    return res
      .status(StatusCodes.OK)
      .json({ message: "the new sponsorship is added", newSponsorShip });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

//get the list of sponsors
export const getAllSponsors = async (req, res) => {
  try {
    const sponsors = await Sponsorship.find()
      .populate("userId")
      .populate("treeId");

    return res.status(StatusCodes.OK).json(sponsors);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

//delete a sponsor
export const deleteSponsor = async (req, res) => {
  try {
    const sponsorId = req.params.id;

    const deletedSponsor = await Sponsorship.findByIdAndDelete(sponsorId);

    if (!deletedSponsor) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Sponsor not found" });
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "Sponsor deleted successfully" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error", error: error.toString() });
  }
};

//update sponsor's info

export const updateSponsor = async (req, res) => {
  try {
    const { sponsorId } = req.params;
    const { price, certification, location, userId, treeId } = req.body;

    const updatedSponsor = await Sponsorship.findOneAndUpdate(
      sponsorId,
      {
        price,
        certification,
        location,
        userId,
        treeId,
      },
      { new: true }
    );

    if (!updatedSponsor) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Sponsor not found" });
    }

    return res.status(StatusCodes.OK).json(updatedSponsor);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error", error: error.toString() });
  }
};
