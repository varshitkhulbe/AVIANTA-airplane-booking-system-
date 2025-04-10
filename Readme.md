### setup the project

-Download this template from github and open it in your fav code editor.
-Go inside folder path and execute the following command:
```
npm install
```
-In the root directory create a `.env` file and add the following env variables.

```
  PORT=<port number of your choice>
```

ex-

```
PORT:3000
```

-Go inside the `src` folder and run following command.
```
npx sequilise init
```
-By executing the above the above command you will get `migrations and seeders` folder along with `config.json` in the config folder.

🔑 Notes:
If you’re using a different database, update the "dialect" (e.g. "mariadb", "postgres", etc.).

Replace "username" and "password" with your actual DB credentials.

For test or production, also update the "host" to match your hosted DB URL.



