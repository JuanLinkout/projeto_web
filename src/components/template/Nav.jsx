import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => (
  <nav className='menu'>
    <ul>
      <li>
        <a href='#/'>
          <FontAwesomeIcon icon='home' />
          <span> Início</span>
        </a>
      </li>
      <li>
        <a href='#/users'>
          <FontAwesomeIcon icon='users' />
          <span> Professores</span>
        </a>
      </li>
      <li>
        <a href='#/faculdade'>
          <FontAwesomeIcon icon='school' />
          <span> Faculdade</span>
        </a>
      </li>
      <li>
        <a href='#/disciplinas'>
          <FontAwesomeIcon icon='address-card' />
          <span> Disciplinas</span>
        </a>
      </li>
    </ul>
  </nav>
);
