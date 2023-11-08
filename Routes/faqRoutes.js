import express from "express";
import { getAllFaq,updatefaq,createFaq,deleteFaq } from "../Controllers/Faqcontroller.js";
import  {faqValidator ,validate,validationMiddleWare } from "../Helpers/faqValidator.js"

const router = express.Router();

router.get('/all', getAllFaq)
router.post('/create',faqValidator,validate,validationMiddleWare, createFaq)
router.patch('/update/:id',faqValidator,validate,validationMiddleWare,updatefaq)
router.delete('/delete/:id',deleteFaq)

export default router;