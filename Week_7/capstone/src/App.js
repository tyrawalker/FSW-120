import {useState} from "react"
import React from "react";
import './App.css';
import Tweet from "./components/tweetData"; 

class App extends React.Component{
  
  state= {
    id: Tweet.id, 
   text: Tweet.text, 
   author: Tweet.author,
   date: Tweet.date
  }

  handleChange = (event) => {
    event.preventDefault ()
    const {name,value} = event.target
    this.setState({
        [name]:value
    })

    render(){
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
    
}
  

export default App;
