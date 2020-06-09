import React, { Component } from 'react';
import './App.css';


//Each content 
import ContentApp from './components/ContentApp';
import ContentApp2 from './components/ContentApp2';
import ContentApp3 from './components/ContentApp2';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <h1>767</h1>
        <ContentApp />
        <ContentApp2 />
        <ContentApp3 />
        <Footer />
      </div>
    );
  }
}

export default App;


// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */




