import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => (
  <footer className='footer'>
    <p className='creditos'>
      Projeto Universidade realizado em <FontAwesomeIcon icon={['fab', 'react']} /> por Juan.
    </p>
  </footer>
);
