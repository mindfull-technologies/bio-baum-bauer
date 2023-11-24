import express from "express";
import multer from 'multer';
import bytes from 'bytes';
import {
  createGalleryItem,
  getAllGalleryItems,
  getGalleryItemById,
  updateGalleryItemById,
  deleteGalleryItemById,
  validateGallery,
} from "../controllers/galleryController.js";
import { storage } from '../config/cloudstorage.js';

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => { //where to store the file
//     cb(null, './storages');
//   },
//   filename: (req, file, cb) => { //generate a new filename
//     console.log("the file is", file)
//     const ext = file.mimetype.split('/')[1];
//     const originalNameExtension = file.originalname.split('.')[0];

//     cb(null, `${originalNameExtension}-${Date.now()}.${ext}`); //this will be the filename
//   }
// });
const upload = multer({
  storage: storage,
  limits: { fileSize: bytes('1MB') },
  fileFilter: (req, file, cb) => { //filter out file types
    if (file.mimetype !== "image/jpeg") { //only allow images d
      return cb(new Error('Only jpeg images allowed'));
    }
    //callback we accept the file. 
    cb(null, true);
  }
})

router.post("/create", upload.single('image'), createGalleryItem);
router.get("/", getAllGalleryItems);
router.get("/:id", getGalleryItemById);
router.put("/update/:id", validateGallery, updateGalleryItemById);
router.delete("/delete/:id", deleteGalleryItemById);

export default router;
