// newsArticlesRoutes.js
import express from 'express';
import { 
  getAllNewsArticles, 
  getNewsArticleById, 
  createNewsArticle, 
  updateNewsArticle, 
  deleteNewsArticle 
} from '../controllers/newsArticlesController.js';

const router = express.Router();

router.get('/', getAllNewsArticles); // Fetch all news articles
router.get('/:id', getNewsArticleById); // Fetch a single news article by ID
router.post('/', createNewsArticle); // Create a new news article
router.put('/:id', updateNewsArticle); // Update a news article by ID
router.delete('/:id', deleteNewsArticle); // Delete a news article by ID

export default router;
