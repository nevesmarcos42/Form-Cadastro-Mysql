//Incluir as bibliotecas
//Gerencia as requisições, rotas e url, entre outras funcionalidades
const express = require("express")
//Importa a biblioteca para permitir conexão externa
const cors = require('cors')
//Chama a função express
const app = express()
//Cria o middleware para receber os dados no corpo da requisição
app.use(express.json())
//Cria middleware para permitir requisição externa
app.use((req, res, next) => {
    //Qualquer endereço pode fazer a requisição
    res.header("Access-control-Allow-Origin", "*");
    //Tios de método que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    //Permite o envio de dados para API
    res.header("Access-Control-Allow-Headers","Content-Type");
    //Executa o cors
    app.use(cors());
    //Quando não houver erro deve continuar o processamento
    next();
})
//Inclui as CONTROLLERS
const messages = require("./controllers/messages")
//cria as rotas
app.use('/message', messages)
//Inicia o servidor na porta 8080 e retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})