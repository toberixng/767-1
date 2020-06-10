import React, { Component } from "react";


class Footer extends Component {
  render() {
    return (
      <div style={footerPosition}>
        <div className="container">
          <div className="row">
            <div className="col-3 hidden-sm">
            <ul style={footerStyle}>
                <span>logo</span>
              </ul>
            </div>
            <div className="col-9">
              <ul style={footerStyle}>
                <span>About</span>
                <span>Terms of use</span>
                <span>Privacy Policy</span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Styling
const footerPosition = {
  position: "fixed",
  bottom: "-5%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "100%",
  background: "blue",
  height: "50px",
  color: "white",
};


const footerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  top: '-10px',
  fontSize: '16px'
};

// const footerStyle = {
//   position: 'fixed',
//   bottom: '-50%',
//   right: '-20%',
//   transform: 'translate(-50%, -50%)',
//   minWidth: '40%',
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   paddingLeft: '10px',
//   paddingRight: '10px',
//   height: '100px',
//   color: 'white'
// };

// PropTypes
Footer.propType = {};

export default Footer;
