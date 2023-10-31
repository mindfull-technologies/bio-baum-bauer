import express from "express";
import {
    createNewUser,
    getAllUsers,
    findUserById,
    findUserByEmail,
    updateById,
    findByEmailAndUpdate,
    deleteUserBasedOnId,
    updateAllField,
    login,
    changingPassword,
    logoutUser
} from "../Controllers/UserController.js";
const router = express.Router();
import {
    nameValidator,
    emailValidator,
    cityValidator,
    houseNumberValidator,
    mobilePhoneValidator,
    zipCodeValidator,
    passwordValidator,
    validate
} from "../Helpers/userValidation.js"

// route for user
router.post('/createUser',
    nameValidator(),
    houseNumberValidator(),
    emailValidator(),
    cityValidator(),
    zipCodeValidator(),
    mobilePhoneValidator(),
    passwordValidator(),
    validate, createNewUser);

router.get('/getAllUsers', getAllUsers);
router.get('/findById/:uId', findUserById);
router.get('/findByEmail', findUserByEmail);
router.patch('/updateById/:uId', updateById);
router.patch('/findByEmailAndUpdate/', findByEmailAndUpdate);
router.put('/findByIdAndUpdate/:uId',
    nameValidator(),
    houseNumberValidator(),
    emailValidator(),
    cityValidator(),
    zipCodeValidator(),
    mobilePhoneValidator(),
    passwordValidator(),
    validate,
    updateAllField);
router.delete('/findByIdAndDelete/:uId', deleteUserBasedOnId);
router.post('/login', login);
router.post('/changPass', changingPassword);
router.get('/logout', logoutUser)

export default router;