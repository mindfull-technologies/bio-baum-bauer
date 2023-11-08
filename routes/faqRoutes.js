import express from "express";
import { getAllFaq, updatefaq, createFaq, deleteFaq } from "../controllers/faqcontroller.js";
import { faqValidator, validate, validationMiddleWare } from "../helpers/faqValidator.js"

const router = express.Router();

router.get('/all', getAllFaq)
router.post('/create', faqValidator, validate, validationMiddleWare, createFaq)
router.patch('/update/:id', faqValidator, validate, validationMiddleWare, updatefaq)
router.delete('/delete/:id', deleteFaq)

export default router;