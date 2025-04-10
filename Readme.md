### setup the project

-Download this template from github and open it in your fav code editor.
-In the root directory create a `.env` file and add the following env variables.

```
  PORT=<port number of your choice>
```

ex-

```
PORT:3000
```

-Inside the "src/config"folder create a file named as `config.json` and write the following code:

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
🔑 Notes:
If you’re using a different database, update the "dialect" (e.g. "mariadb", "postgres", etc.).

Replace "username" and "password" with your actual DB credentials.

For test or production, also update the "host" to match your hosted DB URL.
