import React from 'react';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
 class ScrollTopComponent extends React.Component {
  componentWillMount() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  render() {
   return <ComposedComponent {...this.props} {...this.context} />;
  }
 }
 ScrollTopComponent.contextTypes = {
  router: PropTypes.object
};
 return ScrollTopComponent;
}