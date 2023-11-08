import express from "express";
import {
    createContact,
    getAllContacts,
    findContactById,
    updateContactById,
    deleteContactById
} from "../controllers/ContactController.js";

import { nameValidator, validate } from "../helpers/userValidation.js"
import { validateFullContact } from "../helpers/contactValidationSanit.js"

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
