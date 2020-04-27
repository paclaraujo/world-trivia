import React from 'react';
import './style.css';

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className='answer-btn shadow'>{props.title}</button>
  )
}

export default Button;