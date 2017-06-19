import React, { Component } from 'react';
import './App.css';
import Profile from "./Components/Profile.js"; 



class App extends Component {
  
  constructor(props){
    super(props); 
    this.handleClick = this.handleClick.bind(this); 
    this.state = {
      isOpen: false
    }; 
  }

    handleClick(){
    this.setState(function(prevState){
      return({isOpen: !prevState.isOpen})
    })
  }

  
  render(){         
    return(
      <div className="wrapper">
        <img src={"https://source.unsplash.com/Hjqt6IZiJsM/"} alt="dog image"/>
        <Profile clickStatus={this.state.isOpen} dogProfile={this.props.dog} loadProfile={this.handleClick}/>
      </div>
    ); 
  } 
        
}


export default App;
