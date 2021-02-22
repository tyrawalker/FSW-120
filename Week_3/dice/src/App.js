import './App.css';
import React from "react"
import Dicebox from "./Dicecbox"
class App extends React.Component {

  constructor(){

      super()

      this.state = {

          num1: 0,

          num2: 0,

          num3: 0,

          num4: 0,

          num5: 0

      }
      this.handleClick = this.handleClick.bind(this)
  }
    handleClick(){
      this.setState(prevState => {
            return {
              num1:prevState.num1 = Math.floor(Math.random() * 6),
              num2:prevState.num2 = Math.floor(Math.random() * 6), 
              num3 :prevState.num3 = Math.floor(Math.random() * 6),
              num4:prevState.num4 = Math.floor(Math.random() * 6),
              num5:prevState.num5 = Math.floor(Math.random() * 6),
            }
      })
    }
    
    render() {
        return (
            <div className="die-box">
                <Dicebox Roll={this.state.num1} />
                <Dicebox Roll={this.state.num2} />
                <Dicebox Roll={this.state.num3} />
                <Dicebox Roll={this.state.num4} />
                <Dicebox Roll={this.state.num5} />
                <button onClick = {this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App
