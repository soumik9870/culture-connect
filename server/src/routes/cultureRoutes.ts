import express, { Router } from 'express';

import {
    createCulture,
    getCultures,
    getCultureById,
    updateCulture,
    deleteCulture
} from '../controllers/cultureController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createCulture);
router.get('/', protect, getCultures);
router.get('/:id', protect, getCultureById);
router.put('/:id', protect, updateCulture);
router.delete('/:id', protect, deleteCulture);

export default router;