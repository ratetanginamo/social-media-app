const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const db = require('./db');


const app = express();
app.use(cors());
app.use(bodyParser.json());


const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';


// Register
app.post('/api/register', (req, res) => {
const { username, password } = req.body;
if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
const hashed = bcrypt.hashSync(password, 8);
const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
stmt.run(username, hashed, function (err) {
if (err) return res.status(400).json({ error: 'User exists' });
const token = jwt.sign({ id: this.lastID, username }, JWT_SECRET);
res.json({ token });
});
});


// Login
app.post('/api/login', (req, res) => {
const { username, password } = req.body;
db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
if (!user) return res.status(400).json({ error: 'Invalid user' });
const ok = bcrypt.compareSync(password, user.password);
if (!ok) return res.status(400).json({ error: 'Invalid password' });
const token = jwt.sign({ id: user.id, username }, JWT_SECRET);
res.json({ token });
});
});


// Middleware
function auth(req, res, next) {
const header = req.headers.authorization;
if (!header) return res.status(401).json({ error: 'No token' });
const token = header.split(' ')[1];
jwt.verify(token, JWT_SECRET, (err, decoded) => {
if (err) return res.status(401).json({ error: 'Invalid token' });
req.user = decoded;
next();
});
}


// Create Post
app.post('/api/posts', auth, (req, res) => {
const { content } = req.body;
const stmt = db.prepare('INSERT INTO posts (user_id, content) VALUES (?, ?)');
stmt.run(req.user.id, content, function (err) {
if (err) return res.status(500).json({ error: 'DB error' });
res.json({ id: this.lastID, content });
});
});


// Get Posts
app.get('/api/posts', (req, res) => {
db.all(
`SELECT posts.id, posts.content, posts.created_at, users.username
FROM posts JOIN users ON posts.user_id = users.id
ORDER BY posts.created_at DESC`,
[],
(err, rows) => {
if (err) return res.status(500).json({ error: 'DB error' });
res.json(rows);
}
);
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
