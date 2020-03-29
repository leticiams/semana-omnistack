const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros: 
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtors, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL (formato que é utilizado para se comunicar com o banco de dados, os dados ficam bem estruturados): MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL (bancos não relacionais, os dados ficam muito livres e não estruturados): MongoDB, CouchDB, etc
   */

   /**
    * Query SQL:
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    * ps: Knexjs é o quey builder mais utilizado para nodejs
    */

    routes.post('/sessions', SessionController.create);

    routes.get('/ongs', OngController.index);
    routes.post('/ongs', OngController.create);

    routes.get('/profile', ProfileController.index);

    routes.get('/incidents', IncidentController.index);
    routes.post('/incidents', IncidentController.create);
    routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;