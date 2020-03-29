const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * Transforma a requisição feita em JSON no Body Request para Javascript
 */

 app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

