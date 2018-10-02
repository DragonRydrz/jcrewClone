import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerItem"> CONTACT US</div>
        <div className="footerItem">
          <i className="fab fa-twitter" style={{ marginRight: '5px' }} />
          @jcrew_help
        </div>
        <div className="footerItem">
          <i className="fas fa-phone" style={{ marginRight: '5px' }} />1 800 562
          0258
        </div>
        <div className="footerItem">
          <i
            className="fas fa-question-circle"
            style={{ marginRight: '5px' }}
          />
          help@jcrew.com
        </div>
      </div>
    );
  }
}
