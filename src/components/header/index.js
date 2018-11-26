import React from 'react';
import './style.scss';

const Header = () => (
 <div className='header-container'>
  <img src='assets/logo.svg' className='logo'/>
  <div className='list left'>
   <div className='item'>How it Works</div>
   <div className='item'>Pricing</div>
   <div className='item'>
    <a href="mailto:team@onbns.com?subject=%5Bcareer%5D%20About%20BNS&body=Hi">Join Us</a>
   </div>
  </div>
  <div className='list right'>
   <div className='item'>
    <a href="mailto:team@onbns.com?subject=%5BTry%20Beta%5D%20About%20BNS&body=Hi">Try Beta</a>
   </div>
  </div>
 </div>
);

export default Header;