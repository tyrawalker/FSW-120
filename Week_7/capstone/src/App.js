//import {useState} from "react"
import React from "react";
import './App.css';
import tweet from "./components/tweetData"; 
import Tweet from "./components/twitterPost"

class App extends React.Component{
  state= {
      tweet:tweet
    }
  
    handleChange= (event) =>{
      event.preventDefault()
      const {name,value}= event.target
      this.setState({
        [name]:value
      })
    }

    //add button functions
    deleteButton= () =>{
      this.setState({

      })
    }

    editButton= ()=>{
      this.setState({

      })
    }
  
    render(){

      const tweets= tweet.map(tweet=><Tweet Key= {tweet.id} Tweet= {tweet.text} Author= {tweet.author} Date= {tweet.date} handleChange= {this.handleChange} />)

      return (
          <div className= "twitterFeed">
            <input
                onChange= {this.handleChange}
                placeholder= "Text"
                value= {this.state.text}
                name= "text"/>
            <input
                onChange= {this.handleChange}
                placeholder= "Author"
                value= {this.state.author}
                name= "author"/>
            <input
                onChange= {this.handleChange}
                placeholder= "Date"
                value= {this.state.date}
                name= "date"/>
            
            <button onClick= {this.editButton}>Edit</button>
            <button onClick= {this.deleteButton}>Delete</button>
            {tweets}

          </div>
      )
    }}
    
  
export default App;
