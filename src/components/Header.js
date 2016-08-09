import React, { Component } from 'react';
import logo from '../handcuffs.svg';
import '../App.css';

export default class Header extends Component {
  
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Crime Time</h2>
      </div>
    );
  }
}