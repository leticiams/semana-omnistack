const express = require('express');
const routes = require('./routes');

const app = express();

/**
 * Transforma a requisição feita em JSON no Body Request para Javascript
 */

app.use(express.json());
app.use(routes);

app.listen(3333);

