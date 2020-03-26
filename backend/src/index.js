const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
Métodos HTTP

Get: Buscar uma informação no back-end
Post: Criar uma informação no back-end
Put: Alterar uma informação no back-end
Delete: Deletar uma informação no back-end

*/
/*
Tipos de Parâmetros

Query Params: Parâmetros nomeados e enviados da rota após "?" (Filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/


app.listen(3333);