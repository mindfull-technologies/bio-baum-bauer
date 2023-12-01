import User from "../models/User.js";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import { generateJwt } from "../helpers/jwt.js";

/**
 * the function named createNewUser is for creating new User.
 * @param {*} req ( firstName, lastName, address, email, password, mobilePhone,userType)
 * @param {*} res
 * @returns
 */

export const createNewUser = async (req, res) => {
  const { firstName, lastName, email, password, mobilePhone, userType } =
    req.body;
  const address = {
    city: req.body.city,
    zipCode: req.body.zipCode,
    address1: req.body.address1,
    address2: req.body.address2,
    state: req.body.state,
  };
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await User.create({
      firstName,
      lastName,
      address: address,
      email,
      password: hashedPassword,
      mobilePhone,
      userType,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "user created successfully", user });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * The function name getAllUsers returns all users
 * @param {*} req ()
 * @param {*} res
 * @returns
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).lean(true);
    return res
      .status(StatusCodes.OK)
      .json({ users, message: "all users were retrieved...!" });
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "could not get all users...!" });
  }
};

/**
 * getUserById returns a user based on id provided through parameters.
 * it can be used for showing the details of a user document
 * @param {uId} req
 * @param {*} res
 * @returns
 */
export const findUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.uId).lean(true);
    if (user) {
      return res.status(StatusCodes.OK).json({ user });
    }
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: `user with id=(${req.params.uId}) not found...!` });
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: error.toString() });
  }
};

/**
 * for finding a user record based on the email
 * @param {*} req (email)
 * @param {*} res
 */
export const findUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).lean(true);
    if (user) {
      return res.status(StatusCodes.OK).json({ user });
    }
    return res.status(StatusCodes.NOT_FOUND).json({
      message: `user with Email Address=(${req.body.email}) not found...!`,
    });
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: error.toString() });
  }
};

/**
 * this function is gonna find user by Id and update it
 * @param {uId} req (mobilePhone)
 * @param {*} res
 * @returns
 */
export const updateById = async (req, res) => {
    const { mobilePhone, country,  address: { city, zipCode, address1, address2, state } } =
        req.body;
    const address = {
        country: country ? country : "Germany",
        state: state ? state:"",
        city: city,
        zipCode: zipCode,
        address1: address1,
        address2: address2 ? address2:"" ,
    };
    const update = { mobilePhone, address };
    const isReturnNew = { new: true };
    try {
        const user = await User.findByIdAndUpdate(
            req.params.uId,
            update,
            isReturnNew
        );
        if (!user) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ message: `user with id=(${req.params.uId}) not found...!` });
        }
        return res.status(StatusCodes.OK).json({ user });
    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "Server error happed" });
    }
};

/**
 * find user with email then update it's firstName
 * @param {*} req (email,firstName)
 * @param {*} res
 * @returns
 */
export const findByEmailAndUpdate = async (req, res) => {
  const { email, firstName } = req.body;
  const filter = { email };
  const update = { firstName };
  const renderNew = { new: true };
  try {
    const user = await User.findOneAndUpdate(filter, update, renderNew);
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `user with email=(${email}) not found..!` });
    }
    return res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * for deleting user by Id
 * @param {uId} req
 * @param {*} res
 * @returns
 */
export const deleteUserBasedOnId = async (req, res) => {
  const paramId = req.params.uId;
  try {
    const user = await User.findByIdAndDelete(paramId);
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `user with id=(${paramId}) not found..!` });
    }
    return res.status(StatusCodes.OK).json({ message: "user was deleted..!" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

/**
 * for authenticating user..!
 * @param {*} req
 * @param {*} res
 */
export const login = async (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email, userType: "SPONSOR" });

    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Email or password does not match" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      const token = generateJwt(user._id);
      return res
        .cookie("jwt", token, {
          secure: isProduction,
          httpOnly: true,
          secure: false,
        })
        .status(StatusCodes.OK)
        .json({ user: user, message: "logged in successfully...!" });
    } else {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Email or password does not match" });
    }
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error Happened" });
  }
};

/**
 * for Changing the user password
 * @param {*} req
 * @param {*} res
 */
export const changePassword = (req, res) => {
    try {
        /*
                
                1. checking if user has authenticated.
                2. if yes, checking if they know their previous pass
                3. updating password field
            
                */
    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: error.toString() });
    }
};

/**
 * for logging out the user
 * @param {*} req
 * @param {*} res
 */
export const logoutUser = (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: false,
  });
  res.status(StatusCodes.OK).json({ message: "User logged out successfully" });
};
