import './App.css';
import React from "react"

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
      this.setstate(prevState => {
            return {
              num1:prevState.num1 = Math.floor(Math.random() * 6);
              num2:prevState.num2 = Math.floor(Math.random() * 6); 
              num3 :prevState.num3 = Math.floor(Math.random() * 6);
              num4:prevState.num4 = Math.floor(Math.random() * 6);
              num5:prevState.num5 = Math.floor(Math.random() * 6);
            }
      })
    }
    
    render() {
        return (
            <div className="die-box">
                <h1>{this.state.num1}</h1>
                <h1>{this.state.num2}</h1>
                <h1>{this.state.num3}</h1>
                <h1>{this.state.num4}</h1>
                <h1>{this.state.num5}</h1>
                <button onClick = {this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App
