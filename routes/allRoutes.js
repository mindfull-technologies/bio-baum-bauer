import express from 'express';
import userRoutes from './userRoutes.js'
import feedbackRoutes from './feedbackRoutes.js';
import sponsorShipRoutes from './sponsorShipRoutes.js'
import contactRoutes from './contactRoutes.js'
import newsRoutes from './newsRoutes.js'
import farmRoute from './farmRoutes.js'
import faqRoute from './faqRoutes.js'

const router = express.Router();

router.use('/users', userRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/sponsorShip', sponsorShipRoutes);
router.use('/contact', contactRoutes);
router.use('/news', newsRoutes);
router.use('/farm', farmRoute)
router.use('/faq', faqRoute)

export default router;
