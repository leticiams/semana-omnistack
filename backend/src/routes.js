const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

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

    routes.get('/ongs', async (request, response) => {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    })

   routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    /**
     * Gerando ids de quatro números randômicos
     */

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name, 
      email, 
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
});

module.exports = routes;