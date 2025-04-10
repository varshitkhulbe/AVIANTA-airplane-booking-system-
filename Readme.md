📥 1. Clone & Open Project
Download this template from GitHub or clone it using:

bash
Copy
Edit
git clone https://github.com/varshitkhulbe/Backend-project.git
cd Backend-Project
Open the project in your favorite code editor (e.g., VS Code).

📦 2. Install Dependencies
Run the following command in the root directory:

bash
Copy
Edit
npm install
⚙️ 3. Create .env File
In the root directory, create a file named .env and add:

env
Copy
Edit
PORT=3000
📝 Replace 3000 with the port number of your choice.

🔧 4. Initialize Sequelize
Navigate to the src folder and run:

bash
Copy
Edit
npx sequelize init
This will generate:

migrations/ folder

seeders/ folder

config/config.json file

🛠️ 5. Update config.json
Inside src/config/config.json, update your DB settings like so:

json
Copy
Edit
{
  "development": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "your_db_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  ...
}
🔑 Notes
If you're using a different database, change "dialect" to "mariadb", "postgres", etc.

Replace "username" and "password" with your actual DB credentials.

For test or production, update the "host" to your hosted DB URL.

