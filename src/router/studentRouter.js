import { Router } from 'express';
import { getAllStudents } from '../controller/studentsController';

const studentsRouter = Router();

studentsRouter.get('/', getAllStudents);
studentsRouter.post('/');
studentsRouter.delete('/:id');
studentsRouter.patch('/:id');

export default studentsRouter;
