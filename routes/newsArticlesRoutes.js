import express from 'express';
import { getNewsArticleById,
     createNewsArticle,
     updateNewsArticle,
     deleteNewsArticle }
     from "../controllers/newsArticlesController.js";

const router = express.Router();

router.get('/:id', getNewsArticleById);
router.post('/', createNewsArticle);
router.put('/:id', updateNewsArticle);
router.delete('/:id', deleteNewsArticle);

export default router;