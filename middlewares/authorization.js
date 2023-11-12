import { StatusCodes } from "http-status-codes";
import { verifyJwt } from "../helpers/jwt.js";

export const authorize = (req, res, next) => {
    console.log(req.cookies.jwt);
    if (!req.cookies.jwt) {
        //does the jwt token cookie exist?
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });
        //it doesn't exist
    }
    //verify if token is valid
    try {
        const isValid = verifyJwt(req.cookies.jwt);
        console.log("isValid token", isValid);
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ errorCode: 401, message: 'Unauthorized' });
    }

    next();
}