# ChatBot Api_LLM

Esta é uma API para gerenciamento de um catálogo de filmes. Ela oferece endpoints para criar, ler, atualizar e deletar filmes, além de endpoints para autenticação de usuários. Apenas usuários autenticados podem acessar o catálogo de filmes.

## Tecnologias Utilizadas

- **TypeScript**
- **NestJS**
- **TypeORM**
- **PostgreSQL**
- **Redis**
- **Swagger**
- **Docker**

### 📋 Pré-requisitos

Para rodar a API precisa de tais softwares instalados em sua máquina:

- **Node.js** (Framework de desenvolvimento)
- **Postman** (Testes de rotas)
- **Git** (Para fazer clone do repositório)
- **Docker** (Para PostgreSQL e Redis)

## 🔧 Instalação

Primeiramente faça um clone deste repositório para sua máquina:

```
git clone "https://github.com/JoaoLuiz92/MKSApi"

```

Instalação das dependencias necessarias, node_modules:

```
npm install

```

Configure o banco de dados PostgreSQL e o Redis. Você pode usar Docker para isso:

```
docker-compose up -d

```

Configure as variáveis de ambiente. Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123
POSTGRES_DB=movie_catalog
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your_jwt_secret

```

Execute as migrações do banco de dados:

```
npm run build
npm run migration:run

```

Inicie a aplicação:

```

npm run start

```

## 📍 Endpoints

### 📌 Autenticação

### Registro de Usuário

POST /auth/register

Request Body:

```
{
  "username": "example",
  "password": "password123"
}

```

Response:

```
{
  "id": 1,
  "username": "example"
}

```

### Login de Usuário

POST /auth/login

Request Body:

```
{
  "username": "example",
  "password": "password123"
}

```

Response:

```
{
  "access_token": "jwt_token"
}


```

## 🎥 Filmes

### Criar Filmes

POST /movies

Request Body:

```
{
  "title": "Movie Title",
  "description": "Movie Description",
  "director": "Movie Director",
  "releaseDate": "2023-01-01"
}


```

Response:

```
{
  "id": 1,
  "title": "Movie Title",
  "description": "Movie Description",
  "director": "Movie Director",
  "releaseDate": "2023-01-01"
}


```

### Listar Filmes

GET /movies

Response:

```
[
  {
    "id": 1,
    "title": "Movie Title",
    "description": "Movie Description",
    "director": "Movie Director",
    "releaseDate": "2023-01-01"
  }
]


```

### Obter Filme por ID

GET /movies/:id

Response:

```
{
  "id": 1,
  "title": "Movie Title",
  "description": "Movie Description",
  "director": "Movie Director",
  "releaseDate": "2023-01-01"
}
```

### Atualizar Filme

PUT /movies/:id

Request Body:

```
{
  "title": "Updated Movie Title",
  "description": "Updated Movie Description",
  "director": "Updated Movie Director",
  "releaseDate": "2023-01-01"
}`
```

Response:

```
{
  "id": 1,
  "title": "Updated Movie Title",
  "description": "Updated Movie Description",
  "director": "Updated Movie Director",
  "releaseDate": "2023-01-01"
}

```

### Deletar Filme

DELETE /movies/:id

## Documentação Swagger

A documentação Swagger pode ser acessada em http://localhost:3000/api.
Ela fornece detalhes sobre todos os endpoints disponíveis e permite testar as requisições diretamente pelo navegador.

## Desenvolvedor

- **João Luiz Da Rosa Junior** - [Desenvolvedor](https://github.com/JoaoLuiz92)

## 📄 Licença

Este projeto está sob a licença (MIT) - veja o arquivo [LICENSE.md](https://github.com/JoaoLuiz92/MKSApi/blob/main/LICENSE) para detalhes.

## 🎁 Expressões de gratidão

Projeto de API Rest, feito para um teste técnico, onde tive bons e varios desafios,
e a oportunidade de aprender,e me aperfeiçoar ainda mais na área de backend 📢;

- Agradeço a Deus por essa oportunidade, e também a empresa MKS por esta oportunidade, e suporte no teste realizado 🫂;
