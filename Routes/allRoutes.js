import express from 'express';
import userRoutes from './userRoutes.js'
import productRoutes from './productRoutes.js';
import commentRoutes from './commentRoutes.js';
import sponsorRoutes from './sponsorRoutes.js'
import contactRoutes from './contactRoutes.js'
import newsRoutes from './newsRoutes.js'

const router = express.Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/comments', commentRoutes);
router.use('/sponsors', sponsorRoutes);
router.use('/contact', contactRoutes);
router.use('/news', newsRoutes);

export default router;