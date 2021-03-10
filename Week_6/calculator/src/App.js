import React from "react"
// import Calculator from "./components/calculator"
  
 class App extends React.Component {
    
    state= {
        num1:0, 
        num2:0, 
        sum:0    }

    handleChange = (event) => {
        event.preventDefault ()
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    addButton = () => {
        this.setState ({
            sum:Number(this.state.num1) + Number(this.state.num2)
        })
    }
    subButton = () => {
        this.setState ({
            sum:Number(this.state.num1) - Number(this.state.num2)
        })
    }
    mulButton = () => {
        this.setState ({
            sum:Number(this.state.num1) * Number(this.state.num2)
        })
    }
    divButton = () => {
        this.setState ({
            sum:Number(this.state.num1) / Number(this.state.num2)
        })
    }

    render () {
        return (
            <div> 
               {/*<Calculator/> */}
               <input 
                    onChange = {this.handleChange}
                    value = {this.state.num1}
                    name = "num1"/>
               <input
                    onChange = {this.handleChange}
                    value = {this.state.num2}
                    name = "num2"/>
               <p>{this.state.sum}</p>
               <button onClick= {this.addButton}>+</button>
               <button onClick= {this.subButton}>-</button>
               <button onClick= {this.mulButton}>*</button>
               <button onClick= {this.divButton}>/</button>
               
            </div>  
          )
    }

}

export default App