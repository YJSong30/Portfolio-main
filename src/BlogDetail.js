import React from 'react';
import { useParams } from 'react-router-dom';

function BlogDetail({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  return (
    blog ? (
      <div className="blog-details">
        <h2>{blog.title}</h2>
        <div>{blog.content}</div>
        
      </div>
    ) : (
      <div>Blog not found</div>
    )
  );
}

export default BlogDetail;