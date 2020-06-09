import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
          <div style={footerStyle}>
            <h1>Footer content</h1>
          </div>
        );
    }
}

//Styling
const footerStyle = {
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

// PropTypes
Footer.propType = {

}

export default Footer
