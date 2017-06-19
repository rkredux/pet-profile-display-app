import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const dog = {
	name: "WOFIE SPENCER", 
	location: "BOSTON", 
	breed: "SPANIEL MIX", 
	about: "I can eat all day. I prefer mid-day walks. I love playing with small dogs. My favorite quote is woof-woof"
}

ReactDOM.render(<App dog={dog} />, document.getElementById('root'));
registerServiceWorker();
