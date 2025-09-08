# Social Media App

A minimal fullstack **social media web app** built with **Node.js**, **SQLite**, **React**, and **Vite**. Designed to run inside **Termux** on Android, with support for pushing to **GitHub** and editing in **VS Code**.

---

## 🚀 Features

* User registration & login (with JWT authentication)
* Create and view posts
* Persistent storage using SQLite
* Simple frontend with React (Vite)

---

## 📂 Project Structure

```
social-media-app/
├─ backend/        # Node.js + Express + SQLite backend
│  ├─ package.json
│  ├─ server.js
│  └─ db.js
├─ frontend/       # React + Vite frontend
│  ├─ package.json
│  ├─ vite.config.js
│  ├─ index.html
│  └─ src/
│     ├─ main.jsx
│     ├─ App.jsx
│     ├─ api.js
│     ├─ Login.jsx
│     ├─ Register.jsx
│     ├─ Feed.jsx
│     └─ CreatePost.jsx
├─ .gitignore
└─ README.md
```

---

## ⚙️ Setup & Installation

### 1. Clone Repository

```bash
git clone https://github.com/ratetanginamo/social-media-app.git
cd social-media-app
```

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

Runs the backend on **[http://localhost:4000](http://localhost:4000)**

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Runs the frontend on **[http://localhost:5173](http://localhost:5173)**

---

## 📱 Running on Termux

Make sure Termux has Node.js, npm, and Git installed:

```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
```

Then follow the setup steps above.

---

## 🛠 GitHub Integration

Initialize Git and push project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/social-media-app.git
git push -u origin main
```

---

## 📖 Usage

* Register a new account
* Login to receive a token (saved in localStorage)
* Create posts
* View posts feed in real time

---

## ⚠️ Notes

* For local development, both backend (4000) and frontend (5173) must be running.
* This is a **starter app**. Do not use in production without adding:

  * Password policies
  * HTTPS
  * Database migrations
  * Better error handling
  * Environment-based configuration

---

## 📌 Next Steps

* Add likes & comments
* Add user profiles & avatars
* Improve UI/UX with Tailwind CSS
* Deploy to cloud (Heroku, Vercel, or Docker)

---

## 📜 License

MIT License © 2025
