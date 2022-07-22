
# Costko Tutorial Service

## About
This is an api service developed in nodeJS by the **Transformers** Team in order to be used for the tutorial component.

## Technologies
This service uses NodeJS with the following stack:
 - NestJS for an efficient and scalable server-side application
 - TypeORM for DB operations and DB security
 - class-validator for efficient validation
 - Postgres for DB

 ## Endpoints

 ### Tutorials Endpoint

 #### Get (oData)

 ```
 fetch('http://localhost:3000/tutorial?$top=2')
    .then(r => r.json())
    .then(data => console.log(data));
  ```

 #### Insert

 ```
  const payload = {
    description: 'test desc 2',
    title: 'test title 2',
    order: 4,
    pageCode: 'ECP',
    elementCode: 1,
  }

  fetch('http://localhost:3000/tutorial', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
    .then(r => r.json())
    .then(data => console.log(data));
  ```

 #### Update

 ```
  const payload = {
    description: 'test desc 3',
    title: 'test title 3',
    order: 12,
    pageCode: 'MAT',
    elementCode: 2,
  }
  fetch('http://localhost:3000/tutorial/3', {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
    .then(r => r.json())
    .then(data => console.log(data));
  ```

 #### Bulk Insert

 ```
  const payload = [
    {
      description: 'BULK INSERTED 1',
      title: 'BULK INSERTED 1 title',
      order: 14,
      pageCode: 'MAT',
      elementCode: 'ECP_TABLE'
    },
    {
      description: 'BULK INSERTED 2',
      title: 'BULK INSERTED 2 title',
      order: 15,
      pageCode: 'MAT',
      elementCode: 'ECP_TABLE'
    }
  ];
  fetch('http://localhost:3000/tutorial/bulkInsert', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
    .then(r => r.json())
    .then(data => console.log(data));
  ```

 #### Delete

 ```
  const payload = { id: 4 }
  fetch('http://localhost:3000/tutorial', {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
    .then(r => r.json())
    .then(data => console.log(data));
 ```


 ### Page Codes Endpoint

 #### Get (oData)

 ```
 fetch('http://localhost:3000/elementCodes?$top=2')
    .then(r => r.json())
    .then(data => console.log(data));
  ```

 ## To Do

 There are a couple of things left to implement for this api in order to be able to use it with our app

 ### Major
 - Make this run in a container just like the .NET api
 - Make this use the actual PG database. (And yes, we are able to connect to it)
 - Token based authentication

 ### Other stuff to do
 - finish this documentation
 - try to use this api on the tutorial admin we developed in UI and see how it works
 - find a way to make the **IsInDbValidator** throw 404 error instead of 400
 - externalize error message names
 - make sure 4xx and 5xx error messages are consistant across the app