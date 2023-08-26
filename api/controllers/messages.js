//Incluir as bibliotecas
//Gerencia as requisições, rotas e url, entre outras funcionalidades
const { error } = require("console");
const express = require("express")
//Chama a função express
const router = express.Router();
//Iclui a conexão com banco de dados
const db = require('../db/models')
//Cria a rota cadastrar
router.post("/", async (req, res) => {
    //Recebe os dados enviados no corpo da requisição
    var data = req.body;
    //Salva no banco de dados
    db.messages.create(data).then((dataMessages) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso!",
            data: dataMessages
        })
    }).catch(() => {
        return res.json({
            error: false,
            message: "Mensagem não cadastrada!",
        })
    })
        
})  
module.exports = router;