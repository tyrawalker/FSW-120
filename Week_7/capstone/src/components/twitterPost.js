import React from "react"

function Tweet (props){
    return (
        <div className= "twitterPost">
            <p>{props.id}</p>
            <p>{props.text}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default Tweet