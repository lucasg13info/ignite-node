const { response } = require('express');
const express = require('express');


const app = express();

app.use(express.json());

/**
 * GET - Buscar info
 * POST - Inserir dados
 * PUT - ALterar dados
 * PATCH - Alterar info específica
 * DELETE - Deleta o dado
 */


/**
 * Tipos de parâmetros
 * 
 * Route Params => Identificar recurso para editar, buscar ou deletar (exemplo id na rota)
 * Query Params => Paginação, Filtro (http://localhost:3333/courses?page=1&order=desc)
 * Body Params => Os objetos inserção ou alteração de recurso (JSON)
 */
app.get("/courses", (request, response)=> {
    const query = request.query
    console.log(query)
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
})

app.post("/courses", (request, response)=>{
    const body = request.body
    console.log(body)
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response)=>{
    const params = request.params;
    console.log(params)
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response)=>{
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response)=>{
    return response.json(["Curso 6", "Curso 2", "Curso 4"])
})
app.listen(3333);