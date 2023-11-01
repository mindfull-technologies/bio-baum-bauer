import express from "express";
import { getAllfarms,createFarm,updateFarm,deleteFarm } from "../Controllers/FarmController.js";
const router = express.Router();

router.get('/all', getAllfarms)
router.post('/create', createFarm)
router.patch('/update/:id',updateFarm)
router.delete('/delete/:id',deleteFarm)

export default router;