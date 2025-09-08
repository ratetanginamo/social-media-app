const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');


db.serialize(() => {
db.run(`CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT UNIQUE,
password TEXT
)`);


db.run(`CREATE TABLE IF NOT EXISTS posts (
id INTEGER PRIMARY KEY AUTOINCREMENT,
user_id INTEGER,
content TEXT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);
});


module.exports = db;
