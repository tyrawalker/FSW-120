import React from "react"


function BlogPost (props){
    return (
    
    <div className="info-box">
        <h1>{props.title}</h1>
        <h2 >{props.subtitle}</h2>
        <h3>Written By: {props.author}</h3>
        <p>{props.date}</p>
        <hr/>
    </div>

    )
}
export default BlogPost