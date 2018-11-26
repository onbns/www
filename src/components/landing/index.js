import React from 'react';
import Jumbotron from './jumbotron';
import Introduction from './introduction';
import './style.scss';

export default class Landing extends React.Component {
  render() {
    return (
     <div className='container text-center'>
      <Jumbotron />
      <Introduction />
   </div>)
  }
}