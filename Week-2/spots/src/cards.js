import React from "react"

function cards (props) {
    return (
        <div className="info-box">
        <h1>{props.place}</h1>
        <h2>{props.price}</h2>
        <h3>{props.timeToGo}</h3>
        <hr/>
    </div>
    )
}

export default cards