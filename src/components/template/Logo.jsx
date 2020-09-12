import React from 'react';

import './Logo.css';
import logo from '../assets/img/logo.png';

export default (props) => (
  <aside className='logo'>
    <a href='/'>
      <img src={logo} alt='Logo empresa' />
    </a>
  </aside>
);
