# Projeto CRUD de Usuários com Express e JavaScript

Este é um projeto simples de um CRUD (Create, Read, Update, Delete) de usuários utilizando Node.js, Express e JavaScript. Ele demonstra como criar, listar, atualizar e excluir usuários em memória.

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

```plaintext
crud-users-express-js/
|-- routes/                  (pasta para as rotas da aplicação)
|   |-- usuarioRoutes.js     (arquivo com as rotas do CRUD de usuários)
|-- models/                  (pasta para os modelos de dados)
|   |-- Usuario.js           (arquivo com a classe de usuário)
|-- app.js                   (arquivo principal da aplicação)
|-- package.json             (arquivo de configuração do Node.js)
|-- package-lock.json        (arquivo de controle de versão das dependências)
```
## Configuração
Certifique-se de ter o Node.js instalado em seu sistema.
Clone este repositório para o seu ambiente local.

Execute o seguinte comando para instalar as dependências:

```plaintext
npm install
```

## Como Executar
Para iniciar o servidor Express, utilize o seguinte comando:
```plaintext
node app.js
```
O servidor será executado na porta 3000 por padrão. Você pode acessar as rotas do CRUD de usuários a partir do endpoint http://localhost:3000/usuarios.

## Rotas
```plaintext
POST /usuarios: Cria um novo usuário.
GET /usuarios: Lista todos os usuários.
GET /usuarios/:email: Busca um usuário pelo email.
PUT /usuarios/:email: Atualiza um usuário pelo email.
DELETE /usuarios/:email: Exclui um usuário pelo email.
```

## Modelo de Usuário
A classe Usuario representa o modelo de usuário. Ela possui os seguintes atributos:

```plaintext
nome: Nome do usuário.
email: Endereço de e-mail do usuário.
senha: Senha do usuário.
nickname: Nickname do usuário.
idade: Idade do usuário.
cidade: Cidade do usuário.
ativo: Estado de atividade do usuário.
```

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções neste projeto. Basta criar um fork deste repositório, fazer suas alterações e enviar um pull request.
