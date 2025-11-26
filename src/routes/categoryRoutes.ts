import express from 'express';
import auth from '../middleware/auth';
import { createCategory, getTree, updateCategory, deleteCategory } from '../controllers/categoryController';

const router = express.Router();

router.post('/', auth, createCategory);
router.get('/', auth, getTree);
router.put('/:id', auth, updateCategory);
router.delete('/:id', auth, deleteCategory);

export default router;
