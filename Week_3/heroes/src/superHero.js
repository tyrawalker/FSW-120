import React from "react"

function superHero (props) {

        return(
            <div className = "super-Hero">
                <p>{props.superHero.name}</p>
                <p>{props.superHero.show}</p>
                <p>{props.superHero.catchPhrase}</p>
                onChange={() => console.log("Changed!")}
            </div>
        )
}


export default superHero
