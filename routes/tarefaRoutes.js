import express from 'express'
import TarefaController from "../controller/tarefaController.js";
import tarefaController from '../controller/tarefaController.js';

const router = express.Router();

router.get('/', tarefaController.getAll);
router.post('/', tarefaController.create);
router.put('/', tarefaController.update);
router.delete('/', tarefaController.delete);

export default router;