import express from 'express';
import { createLike, getLikes, deleteLike } from '../controllers/likeController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createLike);
router.get('/', protect, getLikes);
router.delete('/:id', protect, deleteLike);

export default router;
