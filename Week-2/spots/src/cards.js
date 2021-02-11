import React from "react"
import vacationSpots from './vacationSpots'

function cards (props) {
    return (
        <div className="info-box">
        <h1>{vacationSpots.props.place}</h1>
        <h2>{vacationSpots.props.price}</h2>
        <h3>{vacationSpots.props.timeToGo}</h3>
        <hr/>
    </div>
    )
}

export default cards