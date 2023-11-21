import express from "express";
import {
  createGalleryItem,
  getAllGalleryItems,
  getGalleryItemById,
  updateGalleryItemById,
  deleteGalleryItemById,
  validateGallery,
} from "../controllers/galleryController.js";

const router = express.Router();

router.post("/create", validateGallery, createGalleryItem);
router.get("/", getAllGalleryItems);
router.get("/:id", getGalleryItemById);
router.put("/update/:id", validateGallery, updateGalleryItemById);
router.delete("/delete/:id", deleteGalleryItemById);

export default router;
