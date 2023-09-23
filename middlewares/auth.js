const jwt = require('jsonwebtoken');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const secretKey = process.env.SECRET_KEY || 'sua-chave-secreta-jwt';

function geraToken(usuario) {
  return jwt.sign({ id: usuario._id }, secretKey, { expiresIn: '1h' });
}

function verificaToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ mensagem: 'Token inválido' });
    }

    req.usuarioId = decoded.id;
    next();
  });
}

module.exports = { geraToken, verificaToken };
