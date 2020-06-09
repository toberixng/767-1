import React, { Component } from 'react';
import './compo'

class Footer extends Component {
    render() {
        return (
          <div>
            <div style={footerColor}>
              <div style={footerStyleLeft}>
                <p>10000000</p>
                <p>10000000</p>
                <p>10000000</p>
              </div>
              <div style={footerStyle}>
                <p> About</p>
                <p> Privacy Policy </p>
                <p> Terms of Service </p>
              </div>
            </div>
          </div>
        );
    }
}

//Styling
const footerColor = {
  position: 'fixed',
  bottom: '-15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '100%',
  background: 'blue',
  height: '100px',
  
};

const footerStyleLeft = {
  position: 'fixed',
  bottom: '-50%',
  left: '20%',
  transform: 'translate(-50%, -50%)',
  minWidth: '40%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: '10px',
  paddingRight: '10px',
  height: '100px',
  color: 'white'
};


const footerStyle = {
  position: 'fixed',
  bottom: '-50%',
  right: '-20%',
  transform: 'translate(-50%, -50%)',
  minWidth: '40%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: '10px',
  paddingRight: '10px',
  height: '100px',
  color: 'white'
};


// PropTypes
Footer.propType = {

}

export default Footer
