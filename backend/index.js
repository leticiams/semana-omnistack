const express = require('express');

const app = express();

/**
 * Transforma a requisição feita em JSON no Body Request para Javascript
 */

app.use(express.json());

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

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Letícia Alves'
    });
});

app.listen(3333);

