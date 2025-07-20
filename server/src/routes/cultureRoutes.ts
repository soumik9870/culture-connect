import express, { Router } from 'express';

import {
    createCulture,
    getCultures,
    getCultureById,
    updateCulture,
    deleteCulture
} from '../controllers/cultureController';

const router = express.Router();

router.post('/', createCulture);
router.get('/', getCultures);
router.get('/:id', getCultureById);
router.put('/:id', updateCulture);
router.delete('/:id', deleteCulture);

export default router;