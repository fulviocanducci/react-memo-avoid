import React, { memo } from 'react';

function PostItem({ post }) {
  return <div>{post.title}</div>;
}

export default memo(PostItem);
