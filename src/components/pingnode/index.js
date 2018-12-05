import React from 'react';
import './style.scss';

export default class PingNode extends React.Component {
  componentDidMount() {
    var titleElement = window.document.querySelector('.title-container');
    window.addEventListener('scroll', (c, a)=>{
      let last_known_scroll_position = window.scrollY;
    })
  }
  render() {
    return (<div className='product pingnode'>
      <div className='jumbo'>
        <div className='title-container'>
          <div className='title'>
            Ping Node Service
          </div>
          <div className='intro'>
            Uptime Monitoring
          </div>
          <img src='assets/landing/pingnode.png' className='jumbo_image'/>
        </div>
      </div>
      <div className='block'>
          <div className='title'>
            Why Monitor Node
          </div>
          <div className='intro'>
            Why should your company invest in node uptime monitoring?
          </div>
      </div>
    </div>)
  }
}