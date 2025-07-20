import express from 'express';
import { createTag, getAllTags } from '../controllers/tagController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createTag);
router.get('/', protect, getAllTags);

export default router;
