# Local Business & Article Manager

A simple offline-first CRUD app built with **React**, **localStorage**, **Tailwind CSS**, and a **Node.js + Express + MongoDB Atlas** backend. Users can create businesses and articles offline, then sync them to MongoDB with a single click.

---

## 🚀 Features

- Create and list **Businesses**
- Create and list **Articles** under each Business
- Data is stored in **localStorage** (offline-first)
- One-click **sync to MongoDB Atlas**
- After syncing, data is cleared from localStorage
- **Tailwind CSS** UI for a clean and responsive experience

---

## 🧱 Tech Stack

### Frontend
- React
- Tailwind CSS
- localStorage for offline support

### Backend
- Node.js
- Express.js
- MongoDB Atlas (via Mongoose)
- CORS-enabled API

---

## 📦 Project Structure
/CrudWithLocalStorage
├── rxdb-local-storage/ # React app
├──rxdb-local-storage-backend/ # Node.js + Express server


---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone  https://github.com/Shreyaagrawal23/wakandabook.git
cd CrudWithLocalStorage



🖥️ Frontend Setup (React + Tailwind CSS)

cd rxdb-local-storage
npm install
npm start
This runs the app on http://localhost:3000.



🛠️ Backend Setup (Node.js + MongoDB)

cd rxdb-local-storage-backend
npm install

Create a .env file in backend/ with your MongoDB URI:

MONGO_URI=your_mongodb_atlas_uri

Then run the server:

node server.js

This starts the API at http://localhost:5000.


🔄 How Sync Works
User clicks "Sync to MongoDB"

Local data (businesses and articles) is sent to the backend

Backend saves it to MongoDB

On success, data is cleared from localStorage and UI is refreshed


🧪 Testing Offline Support
Open the app in your browser

Turn off your internet

Create a business and articles (they’re saved in localStorage)

Turn internet back on

Click “Sync to MongoDB”

