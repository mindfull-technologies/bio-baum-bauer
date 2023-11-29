import express from "express";
import userRoutes from "./userRoutes.js";
import feedbackRoutes from "./feedbackRoutes.js";
import sponsorShipRoutes from "./sponsorShipRoutes.js";
import contactRoutes from "./contactRoutes.js";
import newsArticleRouter from "./newsArticleRoutes.js"
import farmRoute from "./farmRoutes.js";
import faqRoute from "./faqRoutes.js";
import galleryRoute from "./galleryRoutes.js";
import treeRoute from './treeRoutes.js'


const router = express.Router();

router.use("/users", userRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/sponsorShip", sponsorShipRoutes);
router.use("/contact", contactRoutes);
// New news articles routes
router.use("/newsArticle", newsArticleRouter);
router.use("/farm", farmRoute);
router.use("/faq", faqRoute);
router.use("/gallery", galleryRoute);
router.use("/tree", treeRoute);

export default router;
