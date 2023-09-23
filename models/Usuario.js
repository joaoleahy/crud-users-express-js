const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  nickname: String,
  idade: Number,
  cidade: String,
  ativo: Boolean,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
