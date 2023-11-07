import express from "express";
import { getAllFaq,updatefaq,createFaq,deleteFaq } from "../Controllers/Faqcontroller.js";
import  {faqValidator ,validate } from "../Helpers/faqValidator.js"

const router = express.Router();

router.get('/all', getAllFaq)
router.post('/create',faqValidator,validate, createFaq)
router.patch('/update/:id',faqValidator,validate,updatefaq)
router.delete('/delete/:id',deleteFaq)

export default router;