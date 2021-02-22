
import React from 'react'
import './App.css';
import blogPostData from './blogPostData'
import BlogPost from './blogPost'
   
function App() {
  const post = blogPostData.map(blog =><BlogPost key= {blog.title} title= {blog.title} subtitle={blog.subtitle} author={blog.author} date={blog.date}/>)
  

  

  return (
      <div>
          {post}            
      </div>
  )
}



export default App;


