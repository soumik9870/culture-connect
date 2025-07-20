import express from 'express';
import {
  createContribution,
  getContributions,
  getContributionById,
  updateContribution,
  deleteContribution,
} from '../controllers/contributionController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createContribution);
router.get('/', protect, getContributions);
router.get('/:id', protect, getContributionById);
router.put('/:id', protect, updateContribution);
router.delete('/:id', protect, deleteContribution);

export default router;
