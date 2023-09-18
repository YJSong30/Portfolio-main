import React from 'react';
import { useParams } from 'react-router-dom';

function BlogDetail({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  return (
    blog ? (
      <div className="blog-details">
        <h2 style={{textAlign: 'center'}}>{blog.title}</h2>
        
        <img src={blog.image} width="600" height="400" alt={`${blog.title}`} />

        <p style={{paddingTop: 3}}>{blog.date}</p>
        <div>{blog.content}</div>
        
      </div>
    ) : (
      <div>Blog not found</div>
    )
  );
}

export default BlogDetail;