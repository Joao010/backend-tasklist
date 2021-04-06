import express from 'express';
import routes from './routes';
import cors from 'cors';

// Importando nossa database
import './database';

class App {
  constructor() {
    this.server = express(); // inicializa o express

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes); // importa todas as rotas
  }
}

export default new App().server;
