import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => (
  <header className='header'>
    <h1>
      <FontAwesomeIcon icon={props.icon} />
      <span> {props.title}</span>
    </h1>
    <p className='subtitle'>{props.subtitle}</p>
  </header>
);
