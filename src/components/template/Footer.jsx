import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => (
  <footer className='footer'>
    <p>
      Projeto Universidade realizado em <FontAwesomeIcon icon={['fab', 'react']} /> por Juan.
    </p>
  </footer>
);
