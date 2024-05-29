<h1 align="center">
  Blog API
<br>
<br>
</h1>
<br>

<div align="right">
    Clique <a href="https://github.com/luc-ribeiro/blog-api-node/blob/master/README-PTBR.md">aqui</a> para ver a versão em Português.
</div

## 💻 Project
The project consists of a simple API for authors and their posts. It allows actions such as creating, listing, editing, and deleting posts.
Posts can be marked as published or not.

## 🚀 Technologies

- **Node.js** 
- **Express**
- **TypeScript**
- **Prisma ORM**

<br>

## Endpoints

#### Listing Users and Posts

<details>
 <summary><code>GET</code> <code><b>/users</b></code> <code>(returns all users)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | JSON containing all users                                           |

##### cURL Example

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/users
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/posts</b></code> <code>(returns all posts)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | JSON containing all blog posts                                      |

##### cURL Example

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/posts
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/post/{id}</b></code> <code>(returns the post with the specified ID)</code></summary>

##### Parameters

> | name   |  type      | data type      | description                                          |
> |--------|------------|----------------|------------------------------------------------------|
> | `id`   |  required  | string         | The unique identifier of the post                    |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | JSON containing the post with the specified ID                      |

##### cURL Example

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/post/id
> ```

</details>

#### Creating a New User or Post

<details>
 <summary><code>POST</code> <code><b>/post</b></code> <code>(creates a new post)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | title     |  required | string                  | Title of the post                                                     |
> | body      |  required | string                  | Content of the post                                                   |
> | author    |  required | int                     | Unique identifier of the post author                                  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Post created successfully`                                         |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### cURL Example

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:4000/posts
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/users</b></code> <code>(creates a new user)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | email     |  required | string                  | User's email                                                          |
> | name      |  required | string                  | User's name                                                           |
> | age       |  optional | int                     | User's age                                                            |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `User created successfully`                                         |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### cURL Example

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @user.json http://localhost:4000/users
> ```

</details>

#### Editing a Post

<details>
 <summary><code>PUT</code> <code><b>/post/{id}</b></code> <code>(edits a post)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id        |  required | int                     | Unique identifier of the post                                         |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | Returns the edited post                                             |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### cURL Example

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @put.json http://localhost:4000/post/id
> ```

</details>

#### Deleting a Post

<details>
 <summary><code>DELETE</code> <code><b>/post/{id}</b></code> <code>(deletes a post)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id        |  required | int                     | Unique identifier of the post                                         |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | Returns a status true                                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### cURL Example

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:4000/post/id
> ```

</details>

<br>

## :page_facing_up: How to Use

- Clone this repository:

```sh
  $ git clone https://github.com/luc-ribeiro/blog-api-node.git
```

- Install the dependencies:

```sh
  # with npm
  $ npm install

  # with yarn
  $ yarn install
```

- Create a `.env` file in the root of the project following the variables defined in the `.env.example` file.

- Run the command:

```sh
  # with npm
  $ npm start

  # with yarn
  $ yarn start
```

- Access the project at `localhost:[PORT DEFINED IN THE .ENV FILE]`
