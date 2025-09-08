import React, { useState } from 'react';
import API from './api.js';


export default function CreatePost() {
const [content, setContent] = useState('');


async function handleSubmit(e) {
e.preventDefault();
try {
await API.post('/api/posts', { content });
setContent('');
window.location.reload();
} catch (err) {
alert('Failed to post');
}
}


return (
<form onSubmit={handleSubmit}>
<input placeholder="Say something..." value={content} onChange={(e) => setContent(e.target.value)} />
<button type="submit">Post</button>
</form>
);
}
