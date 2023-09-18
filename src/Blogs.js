import React from "react";
import BlogPreview from "./BlogPreview";
import './Blogs.css';
import { blogList } from "./blogList";


const Blogs = () => {

  return (
    <div className="blogs">
      <h2 style={{textAlign: 'center'}}>Blogs</h2>
      
      {blogList.map(blog => (
        <BlogPreview key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;