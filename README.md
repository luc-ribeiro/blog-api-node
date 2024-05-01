<h1 align="center">
Blog API
<br>
<br>
</h1>
<br>

## 💻 Projeto
Este projeto foi criado durante o curso de Node.js da B7Web.

O projeto consiste em uma API simples de autores e seus posts. É possível realizar ações como criações, listagem, edições e deleções de posts.
Os posts podem ser marcados como publicados ou não. 

## 🚀 Tecnologias

- **Node.js** 
- **Express**
- **TypeScript**
- **Prisma ORM**

<br>

## Endpoints

#### Listando usuários e posts

<details>
 <summary><code>GET</code> <code><b>/users</b></code> <code>(retorna todos os usuários)</code></summary>

##### Parâmetros

> Nenhum

##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | JSON contendo todos os usuários                                     |

##### Exemplo cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/posts
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/posts</b></code> <code>(retorna todos os posts)</code></summary>

##### Parâmetros

> Nenhum

##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | JSON contendo todos os posts do blog                                |

##### Exemplo cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/posts
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/post/{id}</b></code> <code>(retorna o post do ID específico)</code></summary>

##### Parâmetros

> | name   |  type      | data type      | description                                          |
> |--------|------------|----------------|------------------------------------------------------|
> | `id` |  required    | string         | O identificador único específico do post             |

##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | JSON contendo somente o post do ID específico                       |

##### Exemplo cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/post/id
> ```

</details>

#### Criando um novo usuário ou post

<details>
 <summary><code>POST</code> <code><b>/post</b></code> <code>(cria um novo post)</code></summary>

##### Parâmetros

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | title     |  required | string                  | Título do post                                                        |
> | body      |  required | string                  | Conteúdo do post                                                      |
> | author    |  required | int                     | Identificador único do autor do post                                  |


##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Post created successfully`                                         |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### Exemplo cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:4000/posts
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/users</b></code> <code>(cria um novo user)</code></summary>

##### Parâmetros

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | email     |  required | string                  | E-mail do usuário                                                     |
> | name      |  required | string                  | Nome do usuário                                                       |
> | age       |  optional | int                     | Idade do usuário                                                      |


##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `User created successfully`                                         |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### Exemplo cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:4000/posts
> ```

</details>

#### Editando um post

<details>
 <summary><code>PUT</code> <code><b>/post/{id}</b></code> <code>(edita um post)</code></summary>

##### Parâmetros

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id        |  required | int                     | Identificador único do post                                           |

##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | Returns the post changed                                            |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### Exemplo cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @put.json http://localhost:4000/post/id
> ```

</details>

#### Deletando um post

<details>
 <summary><code>DELETE</code> <code><b>/post/{id}</b></code> <code>(deleta um post)</code></summary>

##### Parâmetros

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id        |  required | int                     | Identificador único do post                                           |

##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | Returns a status true                                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### Exemplo cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:4000/post/id
> ```

</details>

<br>

## :page_facing_up: Como utilizar

- Faça um clone deste repositório:

```sh
  $ git clone https://github.com/luc-ribeiro/blog-api-node.git
```

- Instale as dependências:

```sh
  # com npm
  $ npm install

  # com yarn
  $ yarn install
```

- Crie um arquivo ```.env``` na raiz do projeto seguindo as variáveis definidas no arquivo ```.env.example```

- Execute o comando:

```sh
  # com npm
  $ npm start

  # com yarn
  $ yarn start
```

- Acesse o projeto em `localhost:[PORTA DEFINIDA NO ARQUIVO .ENV]`


## :memo: License

Copyright © 2020 Lucas Ribeiro
