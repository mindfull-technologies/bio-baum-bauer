import express from 'express';
import * as treeController from '../controllers/TreeController.js'; 

const router = express.Router();

router.get('/get', treeController.getAllTrees);
router.get('/:id', treeController.getTreeById);
router.post('/create', treeController.addTree);
router.put('/:id', treeController.updateTree);
router.delete('/:id', treeController.deleteTree);

export default router;
