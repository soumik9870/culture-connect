import express from 'express';
import {
  createContribution,
  getContributions,
  getContributionById,
  updateContribution,
  deleteContribution,
} from '../controllers/contributionController';

const router = express.Router();

router.post('/', createContribution);
router.get('/', getContributions);
router.get('/:id', getContributionById);
router.put('/:id', updateContribution);
router.delete('/:id', deleteContribution);

export default router;
