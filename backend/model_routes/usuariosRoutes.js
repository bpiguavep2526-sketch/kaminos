import express from 'express'
import { getUsers } from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/', getUsers);

export default router