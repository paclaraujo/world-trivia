import React from 'react';
import Button from '../Button';
import './style.css';

const Card = (props) => {
  return (
    <section className='box'>
      <h1 className='card-title'>How well do you know the world?</h1>
      <p className='question'>{props.question}</p>
      <div className='answers-box'>
        {props.answers.map(answer => 
          <Button handleClick={() => props.handleClick(answer)} title={answer} />   
        )}
      </div>
      <p class='contacts'>Developed by 
        <a href='https://github.com/paclaraujo'>@paclaraujo</a> - Find me on 
        <a href='https://www.linkedin.com/in/paclaraujo/'> LinkedIn</a>
      </p>
    </section>
  )
}

export default Card;