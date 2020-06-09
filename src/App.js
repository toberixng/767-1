import React, { Component } from 'react';


//Each content 
import ContentApp from './components/ContentApp';
import ContentApp2 from './components/ContentApp2';
import ContentApp3 from './components/ContentApp2';
import Footer from './components/Footer'
import FAQholder from './components/FAQholder';
import FAQs from './pages/FAQs/FAQs';

class App extends Component {
  render() {
    return (
      <div>
        <FAQs />
      </div>
    );
  }
}

export default App;


// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */




