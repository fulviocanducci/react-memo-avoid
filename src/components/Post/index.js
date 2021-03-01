import React, { useCallback, useEffect, useState } from 'react';
import PostItem from '../PostItem';

function Post() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((result) => result.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log(error));
  }, []);
  const handleAdd = useCallback(() => {
    setPosts((state) => [{ title: value }, ...state]);
  }, [value]);
  return (
    <div>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleAdd}>Adicionar</button>
      </div>
      <div>{posts && <span>{posts.length}</span>}</div>
      <div>
        {posts.map((p, i) => (
          <PostItem key={i} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Post;
