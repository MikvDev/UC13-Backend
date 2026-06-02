import express from 'express';
/*
    Cria o objeto express.
    Através dele vamos ter acesso a metodos que nos permitem
    criar o nosso servidor
*/
const app = express();
const PORTA = 3000;

// aqui embaixo informamos que nosso servidor vai receber e emviar dados ao JSON
app.use(express.json());

// Aqui vamos criar a nossa primeira rota. Rotas são funções que criamos que, quando alguem chamar, faz uma requisição
// get significa pegar, ou seja, essa é uma rota para pegar uma informação
// Rotas precisam de pelo menos 2 parametros:
// O primeiro é o caminho
//O segundo é uma função que é chamada quando eu acessar a rota
//essa função também precisa de 2 parametros: req e res

// req representa a requisição
// res representa a resposta do servidor
app.get("/servidor", (req,res) => {
    // Res.status(200) significa que o servidor vai enviar um código de sucesso(o numero 200)
    // res.status(200).send
    res.status(200).send("servidor rodando! Xablauuuuuuuuuuuuuuuu")
    res
    
})
app.get("/home", (req,res) => {
    // Res.status(200) significa que o servidor vai enviar um código de sucesso(o numero 200)
    // res.status(200).send
    res.status(200).send("Miguel Vargas Ferreira");
    
    
})


// inicia o servidor, poe ele pra rodar
// A função listen precisa da porta
// Quando o servidor estiver no ar, colocamos uma mensagem para aparecer, indicando que ele esta rodando
app.listen(PORTA,() => {
    console.log("Servidor iniciado")
})


// crie uma nova rota que retorne seu nome