const express = require('express');

const app = express();

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
  * Request Body: 
  */

app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Letícia Alves'
    });
});

app.listen(3333);

