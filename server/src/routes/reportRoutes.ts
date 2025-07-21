import express from 'express';
import {
  createReport,
  getAllReports,
  updateReportStatus,
  deleteReport
} from '../controllers/reportController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createReport);
router.get('/', protect, getAllReports);
router.patch('/:id/status', protect, updateReportStatus);
router.delete('/:id', protect, deleteReport);

export default router;
