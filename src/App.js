import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';


const app = new Clarifai.App({
  apiKey: 'ddae644fea8442659c282a1ff3b02067'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    };
  }

 onInputChange = (event) => {
    this.setState({input: event.target.value});
 }

 onButtonSubmit = () => {
   this.setState({imageUrl: this.state.input});
   app.models.predict("Clarifai.GENERAL_MODEL", this.state.input).then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
    
  );
 }

  render() {
    return (
      
      <div className="App">
        <Particles className='Particles'/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;