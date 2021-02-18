
import './App.css';
import superHero from "./superHero"
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
    {
      const hero = heroes.map(heroes=><hero key= {superHero.name} superHero={superHero} handleChange={this.handleChange} />)
    
    
    return (
      <div className ="superHeroList">
        {hero}
      </div>
    )
    }

  },

}
export default App;
 