import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Jumbotron from './jumbotron';
import Block from './block';
import Footer from '../footer';

class Welcome extends React.Component {
  componentWillMount() {
    if(window.location.href.includes('cn.onbns')){
      this.context.router.history.push(`/cn`);
    }
  }
  render() {
    return (
     <div className='welcome-page'>
      <Jumbotron />
      <Block 
        title='ping node'
        intro={`Design accurately for monitoring the Blockchain services which traditional ping service cannot satisfy at all. We believe "Every blockchain node service should have deserved a better monitoring service."`}
        img='pingnode'
        action={{
          msg: `ping your node`,
          fnc: () => this.context.router.history.push(`/pingnode`)
        }}
      />
      <Block
        title='network'
        intro={`We host blockchain full node and make it infinitely scalable, secure and reliable so that you can have access to blockchain services immediately.`}
        img='network'
        action={{
          msg: `How it works`,
          fnc: () => this.context.router.history.push(`/network`)
        }}
      />
      <Footer />
   </div>)
  }
}

Welcome.contextTypes = {
  router: PropTypes.object
}

export default Welcome;