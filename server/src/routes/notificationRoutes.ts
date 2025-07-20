import express from 'express';
import {
  createNotification,
  getNotifications,
  markAsRead,
  deleteNotification,
} from '../controllers/notificationController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createNotification);
router.get('/', protect, getNotifications);
router.patch('/:id/read', protect, markAsRead);
router.delete('/:id', protect, deleteNotification);

export default router;
