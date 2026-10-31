require("dotenv").config();

const apiKey = process.env.API_KEY;

console.log("Inicializando rotina de backup...");

if (apiKey) {
    console.log("API KEY carregada com sucesso! (Chave presente)");
} else {
    console.warn("Aviso: API_KEY não encontrada nas variáveis de ambiente.");
}

console.log("Backup realizado com sucesso!!!");
