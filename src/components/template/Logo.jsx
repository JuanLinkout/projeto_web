import React from 'react';

import './Logo.css';
import logo from '../assets/logo2.png';

export default (props) => (
  <aside className='logo'>
    <a href='/'>
      <img src={logo} alt='Logo empresa' />
    </a>
  </aside>
);
