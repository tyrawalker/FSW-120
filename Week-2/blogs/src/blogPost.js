import React from "react"
import blogPostData from '../blogPostData'

function blogPost (props){
    return (
    
    <div className="info-box">
        <h1>{blogPostData.props.title}</h1>
        <h2 >{blogPostData.props.subtitle}</h2>
        <h3>{blogPostData.props.author}</h3>
        <p>{blogPostData.props.date}</p>
        <hr/>
    </div>

    )
}
export default blogPost