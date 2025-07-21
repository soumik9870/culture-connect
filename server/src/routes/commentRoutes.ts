import express from 'express';
import { createComment, getComments } from '../controllers/commentController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createComment);
router.get('/', protect, getComments);

export default router;
