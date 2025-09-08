import React, { useState } from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Feed from './Feed.jsx';
import CreatePost from './CreatePost.jsx';


export default function App() {
const [token, setToken] = useState(localStorage.getItem('token'));
const [page, setPage] = useState('login');


function handleLogin(tok) {
localStorage.setItem('token', tok);
setToken(tok);
setPage('feed');
}


function handleLogout() {
localStorage.removeItem('token');
setToken(null);
setPage('login');
}


if (!token) {
return page === 'login' ? (
<Login onSuccess={handleLogin} onSwitch={() => setPage('register')} />
) : (
<Register onSuccess={handleLogin} onSwitch={() => setPage('login')} />
);
}


return (
<div>
<button onClick={handleLogout}>Logout</button>
<CreatePost />
<Feed />
</div>
);
}
