import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
      <div>
        <h5>ARE YOU A</h5>
        <h1 style={{ fontSize: '70px', margin: 'auto' }}>
          LUDLOW <span style={{ fontStyle: 'italic' }}>or a</span> CROSBY?
        </h1>
        <p>Learn the difference between out signature suit fits,</p>
        <p>so you can find the one that's tailored for you.</p>
        <h6>{'LEARN MORE >'}</h6>
      </div>
    );
  }
}
