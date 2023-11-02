import express from "express";
import { getAllFaq,updatefaq,createFaq,deleteFaq } from "../Controllers/Faqcontroller.js";
const router = express.Router();

router.get('/all', getAllFaq)
router.post('/create', createFaq)
router.patch('/update/:id',updatefaq)
router.delete('/delete/:id',deleteFaq)

export default router;