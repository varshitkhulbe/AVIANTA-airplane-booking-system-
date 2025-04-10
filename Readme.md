### setup the project

-Download this template from github and open it in your fav code editor
-In the root directory create a `.env` file and add the following env variables

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

-If you are setting up development environment,then write the username of your db ,password of your db and in dialect mention whatever db you are using for eg-mariadb,mysql etc.
-if you setting up production or test enviornment,make sure you also replace the host with the hosted db url
