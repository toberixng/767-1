import React, { Component } from "react";
// import logo from './logo.svg';
import alarm from './assets/alarm.svg'


class ContentApp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6"><img src={alarm} className="App-logo" alt="logo" /></div>
          <div className="col-6"><img src={alarm} className="App-logo" alt="logo" /></div>
        </div>
        <clipPath id="clipping">
  <circle cx="150" cy="150" r="50" />
  <rect x="150" y="150" width="100" height="100" />
</clipPath>
      </div>
    );
  }
}


export default ContentApp;
