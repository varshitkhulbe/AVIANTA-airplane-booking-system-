📥 1. Clone & Open Project
Download this template from GitHub or clone it using:<br><br>

bash
Copy
Edit
git clone https://github.com/varshitkhulbe/Basic-node-express-template.git  
cd Backend-Project
Open the project in your favorite code editor (e.g., VS Code).<br><br>

📦 2. Install Dependencies
Run the following command in the root directory:<br><br>

bash
Copy
Edit
npm install
⚙️ 3. Create .env File
In the root directory, create a file named .env and add:<br><br>

env
Copy
Edit
PORT=3000
📝 Replace 3000 with the port number of your choice.<br><br>

🔧 4. Initialize Sequelize
Navigate to the src folder and run:<br><br>

bash
Copy
Edit
npx sequelize init
This will generate:<br>
• migrations/ folder<br>
• seeders/ folder<br>
• config/config.json file<br><br>

🛠️ 5. Update config.json
Inside src/config/config.json, update your DB settings like so:<br><br>

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
  }
}
🔑 Notes:<br>
• If you're using a different database, change "dialect" to "mariadb", "postgres", etc.<br>
• Replace "username" and "password" with your actual DB credentials.<br>
• For test or production, update the "host" to your hosted DB URL.<br><br>
