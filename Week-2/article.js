import React from "React"

function article (props){
    return (
    
    <div className="info-box">
        <h1 style= {{backgroundColor: "#49D6D6"}}>{props.info.title}</h1>
        <h2 style= {{backgroundColor: "#49D6D6"}}>{props.info.subtitle}</h2>
        <p style= {{backgroundColor: "#49D6D6"}}>{props.info.information}</p>
        <hr/>
    </div>

    )
}
export default article