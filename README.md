# Projeto da fase 2, disciplina Node JS - O Princípio, aula 4.

# Rodar o app

Rode no terminal do projeto.

```
    npm install
```

Após rode

```
    npm start
```

**E clique no link.**

>[!NOTE]
> Certifiquesse de ter o node e npm instalados, se utilizar o docker para criar o  mongo

### Docker

se utilizar o docker para criar o banco no mongodb, rode no terminal:

```
    docker run -d -p 27017:27017 mongo:latest
```
 
>[!NOTE]
> Lembrando que não é necessário o mongo cria automaticamente um banco se não houver!


### Criando arquivo .env

Crie um arquivo chamado `.env` na raiz do projeto e crie uma porta e um uri pro mongo. Exemplo:

```
    PORT=3030
    MONGODB_URI=mongodb://localhost:27017/db_fiap_fase2_nodejs_aula4
```
