🚀 Project Setup Guide
Follow these steps to get your project up and running:

📥 1. Clone & Open Project
Clone the project and open it in your favorite code editor:

bash
Copy
Edit
git clone https://github.com/varshitkhulbe/Basic-node-express-template.git
cd Backend-Project
Open the folder in VS Code or any editor you prefer.

📦 2. Install Dependencies
Install all required packages using:

bash
Copy
Edit
npm install
⚙️ 3. Create .env File
In the root directory, create a .env file and add the following:

env
Copy
Edit
PORT=3000
💡 Replace 3000 with any port number you prefer.

🔧 4. Initialize Sequelize
Inside the src folder, initialize Sequelize:

bash
Copy
Edit
npx sequelize init
This will generate the following folders/files:

migrations/

seeders/

config/config.json

🛠️ 5. Update config.json
Go to src/config/config.json and update the development configuration:

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
✨ Tips:

Change "dialect" if you're using another DB (e.g., "postgres", "mariadb", etc.).

Replace your_db_username, your_db_password, and your_db_name with your actual credentials.

For hosted databases, update the "host" accordingly.
