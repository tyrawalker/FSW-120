
import React from 'react'
import './App.css';
import blogPostData from './blogPostData'
import blogPost from './blogPost'
   
function App() {
  const post = blogPostData.map(blog => <title key= {blogPost.title} subtitle={blogPost.subtitle} author={blogPost.author} date={blogPost.date}/>)
  
  return (
      <div>
          {post}            
      </div>
  )
}



export default App;
