import React, { useEffect, useState } from 'react';
import API from './api.js';


export default function Feed() {
const [posts, setPosts] = useState([]);


useEffect(() => {
API.get('/api/posts').then((res) => setPosts(res.data));
}, []);


return (
<div>
<h2>Feed</h2>
{posts.map((p) => (
<div key={p.id}>
<strong>{p.username}</strong>: {p.content}
</div>
))}
</div>
);
}
