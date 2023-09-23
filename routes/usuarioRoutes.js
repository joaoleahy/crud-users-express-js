const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario'); // Importe o modelo do Mongoose
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
router.post('/usuarios', async (req, res) => {
  const { nome, email, senha, nickname, idade, cidade } = req.body;

  try {
    const novoUsuario = new Usuario({
      nome,
      email,
      senha,
      nickname,
      idade,
      cidade,
      ativo: true, // Se desejar, você pode definir isso como ativo por padrão
    });

    await novoUsuario.save();
    res.json(novoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao criar o usuário' });
  }
});

// Rota para listar todos os usuários
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao listar os usuários' });
  }
});

// Rota para buscar um usuário por email
router.get('/usuarios/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar o usuário' });
  }
});

// Rota para atualizar um usuário por email
router.put('/usuarios/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    const { nome, senha, nickname, idade, cidade } = req.body;

    usuario.nome = nome;
    usuario.senha = senha;
    usuario.nickname = nickname;
    usuario.idade = idade;
    usuario.cidade = cidade;

    await usuario.save();
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao atualizar o usuário' });
  }
});

// Rota para excluir um usuário por email
router.delete('/usuarios/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    await usuario.remove();
    res.json({ mensagem: 'Usuário excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao excluir o usuário' });
  }
});

module.exports = router;
