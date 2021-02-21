import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
          name: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.name} 
                    name="name" 
                    placeholder="Name" 
                    onChange={this.handleChange} 
                />

                <h1>{this.state.firstName}</h1>
            </form>
        )
    }
}

export default App
