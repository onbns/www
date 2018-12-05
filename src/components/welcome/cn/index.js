import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';
import Jumbotron from './jumbotron';
import Block from './block';
import CNFooter from '../../footer/cn';

class Welcome extends React.Component {
  render() {
    return (
     <div className='welcome-page cn'>
      <Jumbotron />
      <Block 
        title='节点监控'
        intro={`传统监控服务无法满足监控区块链节点。我们相信「每个区块链节点服务都应该得到更好的监控服务。」"`}
        img='pingnode'
        action={{
          msg: `ping your node`,
          fnc: () => this.context.router.history.push(`/pingnode`)
        }}
      />
      <Block
        title='全节点网络'
        intro={`我们托管区块链全节点，使其具有无限可扩展性，安全性和可靠性，以便您可以使用访问区块链服务。`}
        img='network'
        action={{
          msg: `How it works`,
          fnc: () => this.context.router.history.push(`/network`)
        }}
      />
      <CNFooter />
   </div>)
  }
}

Welcome.contextTypes = {
  router: PropTypes.object
}

export default Welcome;