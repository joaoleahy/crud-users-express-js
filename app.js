const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const db = require('./config/db'); // Importa a configuração do MongoDB
const usuarioRoutes = require('./routes/usuarioRoutes'); // Importa as rotas de usuários

app.use(express.json());

// Conecta-se ao MongoDB usando a configuração em db.js
db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso.');
});

// Usa as rotas de usuário definidas em usuarioRoutes.js
app.use('/usuarios', usuarioRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
