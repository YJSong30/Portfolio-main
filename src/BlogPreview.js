import React from 'react';
import { Link } from 'react-router-dom';
import "./Blogs.css"

function BlogPreview({ blog }) {
  return (
    <div className="blog-preview">
      <h2>{blog.title}</h2>
      <Link className="read-more" to={`/blogs/${blog.id}`}>Read More</Link>
    </div>
  );
}

export default BlogPreview;
