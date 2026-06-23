import express from "express"; // importar tudo, {} - importa parte do codigo

const app = express();
app.use(express.json()); // Define que a API utiliza JSON (api REST);

const PORT = 3000;
// função de callback
app.listen(PORT, () => {
    console.log(`PORTA:http://localhost/${PORT}`)
})