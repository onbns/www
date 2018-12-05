import React from 'react';

export default class Jumbotron extends React.Component {
  render() {
    return (<div className='jumbotron'>
      <img src='assets/logo-white.svg' className='logo'/>
      <p>Solutions for Blockchain Infrastructures</p>
    </div>)
  }
}