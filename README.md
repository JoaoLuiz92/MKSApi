# Water-Gas Meter API

Sistema de backend para gerenciamento de leitura individualizada de consumo de água e gás, utilizando integração com a API do Google Gemini para reconhecimento de imagem de medidores. Este projeto visa facilitar a coleta de dados de consumo usando IA, proporcionando uma experiência eficiente e automatizada.

### 📋 Pré-requisitos

Para rodar a API, você precisa dos seguintes softwares instalados em sua máquina:

- **Node.js** (Framework de desenvolvimento)
- **Postman** (Para testes de rotas)
- **Docker e Docker Compose** (Para rodar a aplicação e o banco de dados PostgreSQL em contêineres)
- **Git** (Para fazer o clone do repositório)

### 🔧 Instalação

1. **Clone o repositório para sua máquina:**

    ```bash
    git clone https://github.com/JoaoLuiz92/water-gas-meter-api
    cd water-gas-meter-api
    ```

2. **Instale as dependências necessárias:**

    ```bash
    npm install
    ```

3. **Configure o arquivo `.env` na raiz do projeto com o seguinte conteúdo:**

    ```env
    GEMINI_API_KEY=<SUA_CHAVE_API_GEMINI>
    ```

   > **Nota:** Substitua `<SUA_CHAVE_API_GEMINI>` pela sua chave de acesso ao Gemini.

4. **Suba os contêineres da aplicação e do banco de dados:**

    ```bash
    docker-compose up --build
    ```

5. **Acesse a aplicação no endereço:**

    ```text
    http://localhost:3000/
    ```

### 🔩 Explicando as Rotas

#### **POST** `/upload`

Rota para receber uma imagem (em base64), consultar o Google Gemini e retornar a medida reconhecida pela API de IA. Valida os dados enviados e verifica se já existe uma leitura do mesmo tipo para o mês atual.

- **Request Body:**

    ```json
    {
      "image": "base64",
      "customer_code": "string",
      "measure_datetime": "datetime",
      "measure_type": "WATER" ou "GAS"
    }
    ```

- **Response Body:**
  - **200:** Operação realizada com sucesso
  - **400:** Dados inválidos
  - **409:** Já existe uma leitura para este tipo no mês atual

#### **PATCH** `/confirm`

Rota para confirmar ou corrigir o valor lido pelo LLM, sem fazer novas consultas à IA.

- **Request Body:**

    ```json
    {
      "measure_uuid": "string",
      "confirmed_value": integer
    }
    ```

- **Response Body:**
  - **200:** Operação realizada com sucesso
  - **400:** Dados inválidos
  - **404:** Leitura não encontrada
  - **409:** Leitura já confirmada

#### **GET** `/list`

Rota para listar as medidas realizadas por um determinado cliente, com a opção de filtrar por tipo de medida (WATER ou GAS).

- **Query Parameters:**
  - **measure_type** (opcional): Filtra o tipo de medida (WATER ou GAS).

- **Response Body:**
  - **200:** Operação realizada com sucesso
  - **400:** Tipo de medida inválida
  - **404:** Nenhum registro encontrado

### ⚙️ Executando os Testes de Rotas

Utilize o **Postman** para testar as rotas da API:

1. Abra uma nova requisição no Postman.
2. Selecione o método (POST, PATCH, GET) e insira a URL apropriada.
3. Preencha o Body conforme a especificação das rotas.
4. Adicione o token de autenticação na aba Authorization ou nos Headers.

### 📦 Integração com Gemini

A integração com a API do Google Gemini é feita por meio de requisições HTTP, com os parâmetros e headers especificados na documentação. A API recebe a imagem do medidor, processa o reconhecimento de leitura, e retorna o valor medido, o link temporário da imagem, e um GUID.

### 🛠️ Construído com

- **[Nest.js](https://nestjs.com/):** O framework web usado
- **[Docker](https://www.docker.com/):** Para conteinerização da aplicação e banco de dados
- **[PostgreSQL](https://www.postgresql.org/):** Banco de dados relacional para armazenamento das leituras
- **[Axios](https://axios-http.com/):** Cliente HTTP para comunicação com a API do Gemini

### ✒️ Autor

Desafio realizado por:

- **João Luiz Da Rosa Junior** - _Desenvolvedor_ - [GitHub](https://github.com/JoaoLuiz92)

### 🎁 Expressões de Gratidão

- Agradeço pela oportunidade de aprender novas técnicas e integrar APIs de IA em aplicações reais. Este projeto me permitiu explorar a combinação de inteligência artificial com tecnologias de backend. 📢
- Agradeço a Deus por essa oportunidade e à Shopper por este desafio técnico e suporte durante o desenvolvimento. 🫂
