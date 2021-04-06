import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';
import UserController from './app/controllers/UserController';

// middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Todas rotas abaixo desse middleware precisa estar autenticado
routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);
routes.put('/tasks/:task_id', TaskController.update);
routes.delete('/tasks/:task_id', TaskController.delete);
routes.get('/tasks', TaskController.index);

export default routes;
