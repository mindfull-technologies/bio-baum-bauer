import { body, param, validationResult } from "express-validator";
import { changeToUpperCase } from "./userSanitization.js";
import { StatusCodes } from "http-status-codes";
import User from "../Models/User.js";
export const nameValidator = () => body(['firstName', 'lastName'])
    .notEmpty()
    .withMessage('FirstName and LastName should not be empty..!')
    .isLength({ min: 3, max: 18 })
    .withMessage('The length of FirsName and LastName should be between 3 and 20')
    .customSanitizer(value => changeToUpperCase(value))
    .trim()

export const cityValidator = () => body('address.city')
    .notEmpty()
    .withMessage('city is required')

export const zipCodeValidator = () => body('address.zipCode')
    .notEmpty()
    .withMessage('zipCode is required')

export const houseNumberValidator = () => body('address.houseNumber')
    .notEmpty()
    .withMessage('House Number is required!')

export const emailValidator = () => body('email')
    .notEmpty()
    .withMessage('Email should not be empty...!')
    .isEmail()
    .withMessage('This field is an email address..!')
    .custom(async value => {
        const isThisEmailExist = await User.findOne({ email: value });
        if (isThisEmailExist) {
            throw new Error(`A user with email address ${value} already exist!`)
        }
    })
    .trim()

export const mobilePhoneValidator = () => body('mobilePhone')
    .notEmpty()
    .withMessage('Mobile Number Should not be empty..!')
// .isMobilePhone('de-DE')
// .withMessage('Only Germany Phone Number is accepted..!')

export const passwordValidator = () => body('password')
    .notEmpty()
    .withMessage('Password should not be empty..!')
    .isStrongPassword()
    .withMessage('Password needs to contain at least 8 characters, minimum one lower case character, minimum one uppercase character, minimum one number and minimum one symbol.')



export const parameterValidator = () => param('uId')
    .notEmpty()
    .withMessage("parameter should not left empty!")
    

/**
 * for validating
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    //if there are errors 
    if (!errors.isEmpty()) {
        //response code 400
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() })
    }

    next();
}

