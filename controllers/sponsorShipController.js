import { StatusCodes } from "http-status-codes";
import Sponsorship from "../models/SponsorShip.js";
import OrderItem from "../models/OrderItem.js";

//create a new sponsorship
export const createSponsorShip = async (req, res) => {
  // console.log('reg', req.body)
  try {
    const { totalPrice, userId, payId } = req.body;
    const newSponsorShip = await Sponsorship.create({
      totalPrice: totalPrice,
      userId,
      paymentId: payId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ newSponsorShip });
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
      .populate("orderId");

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

export const updateSponsorShip = async (req, res) => {

  try {
    const { sId } = req.params;
    const { cart } = req.body.trees;
    const sponsorShip = await Sponsorship.findById(sId);

    cart.forEach(async (element) => {
      const newItem = OrderItem.create({
        treeId: element.treeId,
        treeName: element.treeName,
        treeImage: element.treeImage,
        treePrice: element.treePrice,
        qty: element.qty
      });
      sponsorShip.items.push(newItem._id);
      sponsorShip.save();
    });


    if (!sponsorShip) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "SponsorShip page not found" });
    }

    return res.status(StatusCodes.OK).json({ sponsorShip, });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error", error: error.toString() });
  }
};
