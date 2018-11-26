import React from 'react';
import { observer } from 'mobx-react';

import './style.scss';

@observer(['themeStore'])
export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.blockchainIndexList = Object.keys(props.themeStore.blockchainList);
    this.count = 0;
    this.intervalSecond = 2;
    this.colorChanging = new IntervalTimer(()=>{
      props.themeStore.name = this.blockchainIndexList[this.count%this.blockchainIndexList.length]
      this.count++;
    }, 1000*this.intervalSecond)
  }
  componentWillUnmount(){
    this.colorChanging.pause();
  }
  render() {
    const { blockchain } = this.props.themeStore;
    return (
    <div className='landing'>
     <div className='container text-center'>
      <div className='jumbotron'>
       <h1>Connect to <div style={{
       'background': blockchain.color, 
       'color': 'white'
       }}
       className='currentBKC'>{blockchain.name || 'Any'}</div> <br/>blockchain immediately.</h1>
       <p>We focus on the blockchain infrastructure, so you can focus on the features.</p>
      </div>
     </div>
     {this.Voting(blockchain)}
   </div>)
  }
  setCurrent(b) {
    this.count = this.blockchainIndexList.indexOf(b);
    this.props.themeStore.name = b;
  }
  Voting() {
    const { blockchainList, blockchain: { name } } = this.props.themeStore;
    return (<div className='container get-blockchains'>
     <div className='row'>
      {Object.keys(blockchainList).map(b=>(
        <div key={b} className='col col-xs-12 col-md-4 col-lg-3'>
          <div style={{
            'background': (name==b)?blockchainList[b].color:'white', 
            'color': (name==b)?'white':blockchainList[b].color
          }}
          onClick={this.setCurrent.bind(this, b)}
          // onMouseEnter={this.setCurrent.bind(this, b)}
          key={b} className={`item bk-${b} ${(b==name)?'active':''}`}>
          {/* <img className='logo' src={`./bk-imgs/${b.name}`} /> */}
          <div className='title'>{b}</div>
          </div>
        </div>
      ))}
     </div>
    </div>)
   }
}

function IntervalTimer(callback, interval) {
  var timerId, startTime, remaining = 0;
  var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

  this.pause = function () {
      if (state != 1) return;

      remaining = interval - (new Date() - startTime);
      window.clearInterval(timerId);
      state = 2;
  };

  this.resume = function () {
      if (state != 2) return;

      state = 3;
      window.setTimeout(this.timeoutCallback, remaining);
  };

  this.timeoutCallback = function () {
      if (state != 3) return;

      callback();

      startTime = new Date();
      timerId = window.setInterval(callback, interval);
      state = 1;
  };

  startTime = new Date();
  timerId = window.setInterval(callback, interval);
  state = 1;
}