import { body ,validationResult} from "express-validator";
import { StatusCodes } from "http-status-codes";



export const changePasswordValidator = [
  body("currentPassword")
    .trim()
    .notEmpty()
    .withMessage("Current Password feild should not be empty..!")
    .isStrongPassword()
    .withMessage(
      "Password needs to contain at least 8 characters, minimum one lower case character, minimum one uppercase character, minimum one number and minimum one symbol."
    ),body("newPassword")
    .trim()
    .notEmpty()
    .withMessage("New Password field should not be empty..!")
    .isStrongPassword()
    .withMessage(
      "The New Password needs to contain at least 8 characters, minimum one lower case character, minimum one uppercase character, minimum one number and minimum one symbol."
    ),body("confirmNewPassword")
    .trim()
    .notEmpty()
    .withMessage("Confirm Password field should not be empty..!")
    .isStrongPassword()
   /*  .withMessage(
      "Password needs to contain at least 8 characters, minimum one lower case character, minimum one uppercase character, minimum one number and minimum one symbol."
    ) */.custom((value, { req }) => {
        if (value !== req.body.newPassword) {
          throw new Error("The New Password Field should match with Confirm Password Field");
        }
        return true;
      })

];

export const validateResultPassword = (req, res, next) => {
    const errors = validationResult(req);
    //if there are errors
    if (!errors.isEmpty()) {
      //response code 400
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    }
    // if there is not any error, should pass the control to next middleware
    next();
  };
  
