import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
          <div style={footerStyle}>
            <h1
            >
              Footer content
            </h1>
          </div>
        );
    }
}

//Styling
const footerStyle = {
  position: 'fixed',
  bottom: '0px',
  left: '50%',
  top: '50%',
  transform: 'translate(50%, 50%)',
};

// PropTypes
Footer.propType = {

}

export default Footer
