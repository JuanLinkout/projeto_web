import React from 'react';
import Header from './Header';
import './Main.css';

export default (props) => (
  <React.Fragment>
    <Header {...props} />
    <main className='main-content'>{props.children}</main>
  </React.Fragment>
);
