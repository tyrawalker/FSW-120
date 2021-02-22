import React from "react"
import './App.css';
import SuperHero from "./superHero"
import heroes from "./heroesData.json";

class App extends React.Component{
  constructor (){
    super()
    this.state = {
      heroes : heroes
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(name){
  
  }

  render () {
    
      const hero = heroes.map(heroes=><SuperHero key= {heroes.name} superHero={heroes.show} catchPhrase = {heroes.catchPhrase} imageName= {heroes.imageName} handleChange={this.handleChange} />)
    
    
    return (
      <div className ="superHeroList">
        {hero}
      </div>
    )
    

  }

}
export default App;
 