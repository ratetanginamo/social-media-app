import React, { useState } from 'react';
import API from './api.js';


export default function Login({ onSuccess, onSwitch }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


async function handleSubmit(e) {
e.preventDefault();
try {
const res = await API.post('/api/login', { username, password });
onSuccess(res.data.token);
} catch (err) {
alert('Login failed');
}
}


return (
<form onSubmit={handleSubmit}>
<h2>Login</h2>
<input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
<button type="submit">Login</button>
<p>Don’t have an account? <a onClick={onSwitch}>Register</a></p>
</form>
);
}
