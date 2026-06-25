# Banco API Tests

## Sobre o projeto

O **Banco API Tests** é um projeto de automação de testes de API REST desenvolvido em **JavaScript**, com foco na validação dos endpoints da API do projeto **banco-api**, criada por Julio de Lima.

Repositórios relacionados:

- Projeto de testes: https://github.com/kafilipe/banco-api-tests
- API testada: https://github.com/juliodelimas/banco-api

O objetivo deste projeto é fornecer uma suíte automatizada de testes para validação de regras de negócio, contratos, códigos de status e comportamento dos endpoints disponibilizados pela API.

---

## Stack utilizada

### Linguagem

- JavaScript (CommonJS)

### Frameworks e bibliotecas

| Dependência | Finalidade |
|------------|------------|
| Mocha | Framework de execução dos testes |
| Chai | Biblioteca de asserções |
| Supertest | Testes de APIs HTTP |
| Dotenv | Gerenciamento de variáveis de ambiente |
| Mochawesome | Geração de relatórios HTML |

---

## Estrutura do projeto

```text
banco-api-tests/
│
├── fixtures/
│   └── Massa de dados utilizada nos testes
│
├── helpers/
│   └── Funções auxiliares e configurações compartilhadas
│
├── test/
│   └── Casos de teste automatizados
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Pré-requisitos

Antes de executar os testes, certifique-se de possuir instalado:

- Node.js 18+ (recomendado)
- npm

Além disso, a API alvo deve estar disponível e acessível.

---

## Configuração do ambiente

### Instalação das dependências

```bash
npm install
```

### Arquivo .env

Este arquivo não é versionado e deve ser criado manualmente na raiz do projeto.

Exemplo:

```env
BASE_URL=http://localhost:3000
```

Substitua a URL pelo endereço onde a API está sendo executada.

---

## Execução dos testes

Executar todos os testes:

```bash
npm test
```

O script atualmente configurado no package.json é:

```json
{
  "scripts": {
    "test": "mocha ./test/**/*.test.js --timeout=200000 mocha tests --reporter mochawesome"
  }
}
```

---

## Relatórios

O projeto utiliza o **Mochawesome** para geração de relatórios HTML.

Após a execução dos testes, será criado o diretório:

```text
mochawesome/
```

Dentro dele estarão disponíveis os arquivos de relatório gerados automaticamente, incluindo:

```text
mochawesome/
├── mochawesome.html
└── mochawesome.json
```

Para visualizar o resultado da execução, abra o arquivo:

```text
mochawesome/mochawesome.html
```

em qualquer navegador.

---

## Dependências e documentação

### Mocha
https://mochajs.org/

### Chai
https://www.chaijs.com/

### Supertest
https://github.com/forwardemail/supertest

### Dotenv
https://github.com/motdotla/dotenv

### Mochawesome
https://github.com/adamgruber/mochawesome

### Node.js
https://nodejs.org/

---

## Fluxo de utilização

1. Clonar o repositório.
2. Instalar as dependências com `npm install`.
3. Criar o arquivo `.env` com a variável `BASE_URL`.
4. Garantir que a API esteja disponível.
5. Executar os testes com `npm test`.
6. Consultar o relatório HTML gerado pelo Mochawesome.

---

## Autor
Karina Filipe
