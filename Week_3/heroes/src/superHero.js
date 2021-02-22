import React from "react"

function SuperHero (props) {
 var click= () =>{
    alert (props.catchPhrase)
 }
        return(
            <div className = "super-Hero" onClick= {click} >
                <p>{props.name}</p>
                <p>{props.show}</p>
                <img src={props.imageName}/> 
                
            </div>
        )
}
 {/* image tags with ALT attribute sometimes fail in component files*/}

export default SuperHero
