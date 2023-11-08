import express from 'express';
import * as treeController from '../Controllers/TreeController.js'; 

const router = express.Router();

router.get('/', treeController.getAllTrees);
router.get('/:id', treeController.getTreeById);
router.post('/', treeController.addTree);
router.put('/:id', treeController.updateTree);
router.delete('/:id', treeController.deleteTree);

export default router;
