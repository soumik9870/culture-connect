import express from 'express';
import {
  createMessage,
  getMessages,
  getMessageById,
  deleteMessage,
} from '../controllers/messageController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createMessage);
router.get('/', protect, getMessages);
router.get('/:id', protect, getMessageById);
router.delete('/:id', protect, deleteMessage);

export default router;
