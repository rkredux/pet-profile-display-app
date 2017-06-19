import React, { Component } from 'react';



class Profile extends Component{

  render(){
   if(!this.props.clickStatus){
    return (
      <div className="profile">       
        <div className="name"><span>{this.props.dogProfile.name}</span><button onClick={this.props.loadProfile} type="button"><i className="fa fa-caret-up fa-lg" aria-hidden="true"></i></button></div> 
        <div className="details">       
          <div className="breed">{this.props.dogProfile.breed}<br/>BREED</div> 
          <div className="location"><span className="icon"><i className="fa fa-map-marker fa-lg" aria-hidden="true"></i></span><span className="city">{this.props.dogProfile.location}</span></div>
      </div>
     </div>  
    ); 
}
    else{
    	return (
    		<div className="profile">       
		        <div className="name"><span>{this.props.dogProfile.name}</span><button onClick={this.props.loadProfile} type="button"><i className="fa fa-caret-down fa-lg" aria-hidden="true"></i></button></div>
		        <div className="description">{this.props.dogProfile.about}</div>
		        <div className="details">       
		          <div className="breed">{this.props.dogProfile.breed}<br/>BREED</div> 
		          <div className="location"><span className="icon"><i className="fa fa-map-marker fa-lg" aria-hidden="true"></i></span><span className="city">{this.props.dogProfile.location}</span></div>
		        </div>
            </div> 
    		); 
    }
  }
}


export default Profile; 