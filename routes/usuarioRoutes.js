const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const { geraToken, verificaToken } = require('../auth');

// Rota para login e obtenção de token JWT
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

    const token = geraToken(usuario);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro no servidor' });
  }
});

// Rota para criar um usuário
router.post('/usuarios', (req, res) => {
  const { nome, email, senha, nickname, idade, cidade } = req.body;
  const novoUsuario = new Usuario(nome, email, senha, nickname, idade, cidade);
  cache.put(email, novoUsuario);
  res.json(novoUsuario);
});

// Rota para listar todos os usuários
router.get('/usuarios', (req, res) => {
  const usuarios = cache.keys().map((key) => cache.get(key));
  res.json(usuarios);
});

// Rota para buscar um usuário por email
router.get('/usuarios/:email', (req, res) => {
  const email = req.params.email;
  const usuario = cache.get(email);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
});

// Rota para atualizar um usuário por email
router.put('/usuarios/:email', (req, res) => {
  const email = req.params.email;
  const usuario = cache.get(email);
  if (usuario) {
    const { nome, senha, nickname, idade, cidade } = req.body;
    usuario.nome = nome;
    usuario.senha = senha;
    usuario.nickname = nickname;
    usuario.idade = idade;
    usuario.cidade = cidade;
    cache.put(email, usuario);
    res.json(usuario);
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
});

// Rota para excluir um usuário por email
router.delete('/usuarios/:email', (req, res) => {
  const email = req.params.email;
  const usuario = cache.get(email);
  if (usuario) {
    cache.del(email);
    res.json({ mensagem: 'Usuário excluído com sucesso' });
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
});

module.exports = router;
