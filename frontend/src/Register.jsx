import React, { useState } from 'react';
import API from './api.js';


export default function Register({ onSuccess, onSwitch }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


async function handleSubmit(e) {
e.preventDefault();
try {
const res = await API.post('/api/register', { username, password });
onSuccess(res.data.token);
} catch (err) {
alert('Registration failed');
}
}


return (
<form onSubmit={handleSubmit}>
<h2>Register</h2>
<input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
<button type="submit">Register</button>
<p>Already have an account? <a onClick={onSwitch}>Login</a></p>
</form>
);
}
