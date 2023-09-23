class Usuario {
    constructor(nome, email, senha, nickname, idade, cidade) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.nickname = nickname;
      this.idade = idade;
      this.cidade = cidade;
      this.ativo = true;
    }
  
    fazerLogin(email, senha) {
      if (this.email === email && this.senha === senha) {
        return true;
      } else {
        return false;
      }
    }
  
    fazerLogout() {
      this.ativo = false;
    }
  }
  
  module.exports = Usuario;
  