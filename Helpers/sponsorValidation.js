import { body, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

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
