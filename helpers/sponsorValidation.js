import { body, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

export const sponsorshipFullValidation = [
  body("price")
    .trim()
    .notEmpty()
    .withMessage("price of tree should be added for sponsorship")
    .isNumeric()
    .withMessage("please enter a number"),

  body('location').notEmpty().withMessage('please specify the location of tree')
];


//*************************the validation of userId and treeId should be added here???? */