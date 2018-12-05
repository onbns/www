import React from 'react';

export default class Jumbotron extends React.Component {
  render() {
    return (<div className='jumbotron'>
      <img src='assets/logo-white.svg' className='logo'/>
      <p>区块链基础设施解决方案</p>
    </div>)
  }
}