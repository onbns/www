import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

class Footer extends React.Component {
  render() {
    return (
      [<div key='1' className='footer'>
      <div className='container wrapper'>
        <div className='row'>
          {this.renderModules(data)}
        </div>  
      </div>
      </div>,
      <div key='2' className='signature'>Blockchain Node Service Inc. (BNS) in San Francisco</div>])
  }
  renderModules(modules){
    return modules.map(m=>(
      <div className='footer-modules col-xs-12 col-sm-4' key={m.module}>
        <div className='module-title'>{m.module}</div>
        {this.renderLinks(m.list)}
      </div>
    ))
  }
  renderLinks(list){
    return list.map(l=>(
      <div key={l.title} className='module-link'>
        {l.outer_link&&
          <div><a href={l.outer_link} target='_blank'>{l.title}</a></div>}
        {l.link&&
          <div><Link to={`${l.link}`}>{l.title}</Link></div>}
      </div>
    ))
  }
}

export default Footer;

const data = [{
  module: 'Company',
  list:[{
    title: 'Contact',
    outer_link: 'mailto:team@onbns.com?subject=Hi%20from%20BNS%20landing%20page&body=hi%2C'
  },{
    title: 'Status',
    link: '/status'
  },{
    title: 'About',
    outer_link: 'https://www.linkedin.com/company/onbns'
  },{
    title: 'We are hiring',
    outer_link: 'https://angel.co/blockchain-node-service'
  }]
},{
  module: 'Products',
  list:[{
    title: 'Ping Node',
    link: '/pingnode'
  },{
    title: 'Network',
    link: '/network'
  }]
},{
  module: 'Follow',
  list:[{
    title: 'Github',
    outer_link: 'https://github.com/onbns'
  },{
    title: 'Medium Blog',
    outer_link: 'https://medium.com/onbns'
  },{
    title: 'Facebook',
    outer_link: 'https://facebook.com/onbns'
  },{
    title: 'Twitter',
    outer_link: 'https://twitter.com/onbns_official'
  }]
}]