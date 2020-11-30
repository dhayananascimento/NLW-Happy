import express from "express";
import path from "path";
import cors from "cors";

import "express-async-errors";
import "./database/connection";

import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(3333);

// app.post("/users/:id", (request, response) => {
//   console.log(request.query);
//   console.log(request.params);
//   console.log(request.body);
//   return response.json({ message: "Hello World" });
// });

// Rota = conjunto
// Recurso = usuario

// Métodos HTTP = GET, POST, PUT DELETE
// Parâmetros - Query Params, Route Params e Body

// GET = buscar informação (Lista, Item)
// POST = criar informação
// PUT = editar informação
// DELETE = deletar informação

// Query Params = http://localhost:3333/users?search=dhayana&page=2 (pesquisa, paginação)
// Route Params = http://localhost:3333/users/1 (identificar um recurso)
// Body = http://localhost:3333/users (muitos dados)

// Driver nativo (ex.: sqlite3.query('select * from users' ))
// Query builder (ex.: knex('users').select('*').where('name', 'Dhayana'))
// ORM (classe que simboliza uma tabela, ex: 3 retorno(usuarios) = 3 classes)
