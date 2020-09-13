import React from 'react';
import './Button.css'

export default props => {

  const classes = `button ${props.class}`;

  return (
    <button className={classes} onClick={(e) => props.click && props.click(e)}>{props.value ? props.value : props.children}</button>
  );
}

