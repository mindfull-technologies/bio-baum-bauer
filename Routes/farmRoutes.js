import express from "express";
import { getAllfarms,createFarm,updateFarm,deleteFarm } from "../Controllers/FarmController.js";
import  {validateFarm ,validate } from "../Helpers/farmValidator.js"

const router = express.Router();

router.get('/all', getAllfarms)
router.post('/create', validateFarm,validate,createFarm)
router.patch('/update/:id',validateFarm,validate,updateFarm)
router.delete('/delete/:id',deleteFarm)

export default router;