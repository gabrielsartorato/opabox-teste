# OpaBox - Avaliação código fonte

Faça o clone do repositório:

```git
git clone https://github.com/gabrielsartorato/opabox-teste.git
```

Para o teste foi utilizado a versão 14.15.0 do node.

Após fazer o clone siga os passos abaixos para execução do backend e fronted.

## Backend

Para executar o backend faça os seguinter passos:

1 - Ainda no terminal, entre no diretório do backend:

```bash
  cd backend
```

2 - Após entrar no diretório, execute o comando yarn no terminal para que possa ser instalados todas as dependências da aplicação:

```bash
  yarn
```

3 - Após instaladas todas as dependências rodar o comando "yarn start:dev" para iniciar o servidor web.

```bash
  yarn start:dev
```

4 - Será apresentado no terminal a seguinte mensagem "Server is running at port 3333".

Teste A:

Fazer uma requisição HTTP - POST para a seguinte url http://localhost:3333/ordenaLista, dentro de seu body, colocar às seguinter informações:

```json
  {
    "listas": {
      "salaN": [ 1, 5, 7, 8 ],
      "salaS": ["a", "x", "n", "p"]
    }
  }
```

Como retorno será recebido às listas ordenadas:

```json 
  {
    "salaN": [1, 5, 7, 8],
    "salaS": ["a", "n", "p","x"]
  }
```

Teste B:

Fazer uma requisição HTTP - GET para a url http://localhost:3333/interlace contendo em seu body ou querys às seguinter informações:

Caso seha dentro do body:

```json
  {
    "intervaloA": [ 20, 40 ],
    "intervaloB": [ 10, 60 ]
  }

```

Ou como query params:

```url
  http://localhost:3333/interlace?intervaloA=10,20&intervaloB=20,40
```

Como retorno será recebido o seguinte json:

```json
  {
    "interlace": false,
    "resp": "Não"
  }
```

## Frontend

Para executar o backend faça os seguinter passos:

1 - Entre no diretório do frontend:

```bash
  cd opa-frontend
```

2 - Após entrar no diretório, execute o comando yarn no terminal para que possa ser instalados todas as dependências da aplicação:

```bash
  yarn
```

3 - Após instaladas todas as dependências rodar o comando "yarn start:dev" para iniciar o servidor web.

```bash
  yarn start
```

4 - Acesse em seu navegador a seguinte url: http://localhost:3000/
