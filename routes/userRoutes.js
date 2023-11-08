import express from "express";
import {
    createNewUser,
    getAllUsers,
    findUserById,
    findUserByEmail,
    updateById,
    findByEmailAndUpdate,
    deleteUserBasedOnId,
    login,
    changePassword,
    logoutUser
} from "../controllers/UserController.js";
const router = express.Router();
import {
    nameValidator,
    emailValidator,
    cityValidator,
    houseNumberValidator,
    mobilePhoneValidator,
    zipCodeValidator,
    passwordValidator,
    parameterValidator,
    validate
} from "../helpers/userValidation.js"

// route for user
router.post('/create-user',
    nameValidator(),
    houseNumberValidator(),
    emailValidator(),
    cityValidator(),
    zipCodeValidator(),
    mobilePhoneValidator(),
    passwordValidator(),
    validate, createNewUser);

router.get('/get-all-users', getAllUsers);
router.get('/find-by-id/:uId', parameterValidator, validate, findUserById);
router.get('/find-by-email', findUserByEmail);
router.patch('/update-by-id/:uId', parameterValidator, validate, updateById);
router.patch('/find-by-email-and-update/', findByEmailAndUpdate);
router.delete('/find-by-id-and-delete/:uId', parameterValidator, validate, deleteUserBasedOnId);
router.post('/login', login);
router.post('/chang-password', changePassword);
router.get('/logout', logoutUser)

export default router;