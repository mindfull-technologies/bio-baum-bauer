import express from "express";
import {
    createContact,
    getAllContacts,
    findContactById,
    updateContactById,
    deleteContactById
} from "../Controllers/ContactController.js";

import { nameValidator, validate } from "../Helpers/userValidation.js"
import { validateFullContact } from "../Helpers/contactValidationSanit.js"

const router = express.Router();

router.post('/create',
    nameValidator(),
    validateFullContact,
    validate,
    createContact);
router.get('/getAll', getAllContacts);
router.get('/find/:cId', findContactById);
router.put('/update/:cId',
    nameValidator(),
    validateFullContact,
    validate,
    updateContactById);
router.delete('/delete/:cId', deleteContactById);

export default router;
