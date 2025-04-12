📥 1. Clone & Open Project
Download this template from GitHub or clone it using:<br>

bash<br>
Copy<br>
Edit<br>
git clone https://github.com/varshitkhulbe/Backend-project.git<br>
cd Backend-Project<br>
Open the project in your favorite code editor (e.g., VS Code).<br>

📦 2. Install Dependencies<br>
Run the following command in the root directory:<br>

bash<br>
Copy<br>
Edit<br>
npm install<br>
⚙️ 3. Create .env File<br>
In the root directory, create a file named .env and add:<br>

env<br>
Copy<br>
Edit<br>
PORT=3000<br>
📝 Replace 3000 with the port number of your choice.<br>

🔧 4. Initialize Sequelize<br>
Navigate to the src folder and run:<br>

bash<br>
Copy<br>
Edit<br>
npx sequelize init<br>
This will generate:<br>

migrations/ folder<br>

seeders/ folder<br>

config/config.json file<br>

🛠️ 5. Update config.json<br>
Inside src/config/config.json, update your DB settings like so:<br>

json<br>
Copy<br>
Edit<br>
{
  "development": {<br>
    "username": "your_db_username",<br>
    "password": "your_db_password",<br>
    "database": "your_db_name",<br>
    "host": "127.0.0.1",<br>
    "dialect": "mysql"<br>
  },<br>
  ...
}
🔑 Notes<br>
If you're using a different database, change "dialect" to "mariadb", "postgres", etc.<br>

Replace "username" and "password" with your actual DB credentials.<br>

For test or production, update the "host" to your hosted DB URL.<br>

