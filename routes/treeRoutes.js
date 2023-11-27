import express from "express";
import * as treeController from "../controllers/TreeController.js";

const router = express.Router();

router.get("/get", treeController.getAllTrees);
router.get('/search/:searchParam', treeController.searchByName);

router.get("/:id", treeController.getTreeById);
router.post("/create", treeController.addTree);
router.patch("/update/:_id", treeController.updateTree);
router.delete("/:id", treeController.deleteTree);
router.post("/cart", treeController.getTreesInCart);

export default router;
