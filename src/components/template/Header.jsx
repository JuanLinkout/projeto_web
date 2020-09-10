import React from 'react'
import './Header.css'

import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => (
    <header className="header">
        <h1>
            <FontAwesomeIcon icon={props.icon} />
            <span> {props.title}</span>
        </h1>
        <p>{props.subtitle}</p>
    </header>
    
)