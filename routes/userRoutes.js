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
    allUserFieldValidator,
    parameterValidator,
    validateResultUser
} from "../helpers/userValidation.js"

// route for user
router.post('/create-user',
    allUserFieldValidator,
    validateResultUser, createNewUser);

router.get('/get-all-users', getAllUsers);
router.get('/find-by-id/:uId', parameterValidator, validateResultUser, findUserById);
router.get('/find-by-email', findUserByEmail);
router.patch('/update-by-id/:uId', parameterValidator, validateResultUser, updateById);
router.patch('/find-by-email-and-update/', findByEmailAndUpdate);
router.delete('/find-by-id-and-delete/:uId', parameterValidator, validateResultUser, deleteUserBasedOnId);
router.post('/login', login);
router.post('/chang-password', changePassword);
router.get('/logout', logoutUser)

export default router;