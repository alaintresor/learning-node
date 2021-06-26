import { Router } from 'express';
import { getAllStudents, register } from '../controller/usersController';

const studentsRouter = Router();

studentsRouter.get('/', getAllStudents);
studentsRouter.post('/', register);
studentsRouter.delete('/:id');
studentsRouter.patch('/:id');

export default studentsRouter;
