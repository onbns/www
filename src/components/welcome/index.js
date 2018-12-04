import React from 'react';
import './style.scss';
import Jumbotron from './jumbotron';
import Block from './block';

export default class Welcome extends React.Component {
  render() {
    return (
     <div className='welcome-page'>
      <Jumbotron />
      <Block 
        title='check'
        intro={`Blockchain is the new internet infrastructur that traditional endpoint checking service cannot statisfy anymore. Monitor the status of the blockchain height, web3 sepcific methods so you can be confident the service is available.`}
        img='check'
        action={{
          msg: `free to check`,

        }}
      />
      <Block 
        title='network'
        intro={`We host full node for you, so you don't need to worry about maintaining and scaling the full node. Support smart contract service such as Ethereum, NEO, Vechain, and more.`}
        img='network'
        action={{
          msg: `coming soon`
        }}
      />
   </div>)
  }
}