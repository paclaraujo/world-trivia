import React from 'react';
import Button from '../Button';
import './style.css';

const Card = () => {
  return (
    <section className='box'>
      <h1 className='card-title'>How well do you know the world?</h1>
      <div>
        <Button title='teste'/>
      </div>
      <p class='contacts'>Developed by 
        <a href='https://github.com/paclaraujo'>@paclaraujo</a> - Find me on 
        <a href='https://www.linkedin.com/in/paclaraujo/'> LinkedIn</a>
      </p>
    </section>
  )
}

export default Card;