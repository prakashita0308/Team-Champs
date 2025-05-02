
# Team-Champs

**Team-Champs** is a web application designed to facilitate team management and collaboration. It provides functionalities for creating teams, managing members, and organizing projects efficiently.

## 📝 Project Description

The application is structured with a **frontend** and a **backend**:

* **Frontend**: Built using HTML, CSS, and JavaScript, providing an intuitive user interface for interaction.
* **Backend**: Handles API requests, data processing, and serves as the bridge between the frontend and data storage.

## 🚀 Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/prakashita0308/Team-Champs.git
   cd Team-Champs
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd backend
   ```

3. **Install Backend Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

   ```bash
   npm install
   ```

4. **Navigate to the Frontend Directory**

   Open a new terminal window/tab and navigate to the frontend directory:

   ```bash
   cd frontend
   ```

   *(Note: If the frontend requires any build steps or package installations, include them here.)*

## 📡 API Endpoints

The backend exposes the following API endpoints:

* `GET /api/teams`: Retrieve a list of all teams.
* `POST /api/teams`: Create a new team.
* `GET /api/teams/:id`: Retrieve details of a specific team by ID.
* `PUT /api/teams/:id`: Update information of a specific team.
* `DELETE /api/teams/:id`: Delete a specific team.

*(Note: Replace `/api/teams` with the actual endpoint paths used in your backend.)*

## 🖥️ How to Run the App

1. **Start the Backend Server**

   In the `backend` directory:

   ```bash
   npm start
   ```

   The backend server will start on `http://localhost:3000` by default.

2. **Open the Frontend**

   Since the frontend is built with static files (HTML, CSS, JS), you can open the `index.html` file directly in your browser:

   ```bash
   cd frontend
   open index.html
   ```

   *(On Windows, you can double-click the `index.html` file to open it in your default browser.)*

   Alternatively, you can serve the frontend using a simple HTTP server:

   ```bash
   npx serve .
   ```

   This will serve the frontend on `http://localhost:5000` (or another available port).

## 🛠️ Technologies Used

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: Node.js, Express.js
* **Version Control**: Git

## 📂 Project Structure

```
## 📂 Images
Team-Champs/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── css/
│   ├── js/
│   └── index.html
└── README.md
```

